import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  basUrl = 'https://angular-train-3939d-default-rtdb.europe-west1.firebasedatabase.app/posts.json';

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();

  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    //console.log(postData);
    this.httpClient.post(
      this.basUrl, postData
    )
    .subscribe(
      (responseData) => {
        console.log(responseData)
      }
    )
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }
  private fetchPosts() {
    this.httpClient
      .get(this.basUrl)
      .pipe(
        map((responseData) => {
          const postsArray = [];
          for(const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({...responseData[key], id: key})
            }
          }
          return postsArray;
        })
      )
      .subscribe(
        // ...
        (data) => console.log(data)
      )
  }
}
