import { AccountsService } from './../accounts.service';
import { LoggingService } from './../logging.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountsService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  constructor(private loggingService: LoggingService, private accService: AccountsService) {

  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accService.addAccount(accountName, accountStatus);
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.loggingService.logStatusChange(accountStatus)
  }
}
