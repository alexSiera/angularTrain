import { AccountsService } from './accounts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];
  constructor(private accService: AccountsService) {}
  ngOnInit() {
    this.accounts = this.accService.accounts;
  }
}
