import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstIbsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    // this.firstIbsSubscription = interval(1000)
    //   .subscribe(c => {
    //     console.log(c);
    //   })
    const customIntervalObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count > 3) {
          observer.error(new Error('Count is greter than 3'))
        }
        if (count > 4) {
          observer.complete();
        }
        count++;
      }, 1000)
    })
    customIntervalObservable


    this.firstIbsSubscription = customIntervalObservable
      .pipe(
        filter(data => data !== 3),
        map((data: number) => `Round: ${data + 1}`)
      )
      .subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log('Observer completed')
    )
  }
  ngOnDestroy() {
    this.firstIbsSubscription.unsubscribe();
  }
}
