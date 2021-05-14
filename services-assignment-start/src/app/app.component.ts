import { CountersService } from './counters.service';
import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {
  activeUserChanges = 0;
  inactiveUserChanges = 0;
  constructor(private countersService: CountersService) {}
  ngOnInit() {
    this.activeUserChanges = this.countersService.activeUsersActionNumber;
    this.inactiveUserChanges = this.countersService.inactiveUsersActionNumber;
  }
}
