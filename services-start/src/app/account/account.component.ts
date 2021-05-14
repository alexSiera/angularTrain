import { AccountsService } from './../accounts.service';
import { LoggingService } from './../logging.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
  constructor(private loggingService: LoggingService, private accService: AccountsService) {

  }
  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accService.updateStatus(this.id, status);
    this.accService.statusUpdated.emit(status);
    // this.loggingService.logStatusChange(status);
    //console.log('A server status changed, new status: ' + status);
  }
}
