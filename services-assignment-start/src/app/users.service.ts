import { LoggingService } from './logging.service';
import { EventEmitter, Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})

export class UsersService {
  activeUsers: string[] = ['Max', 'Anna'];
  inactiveUsers: string[] = ['Test', 'Alex'];

  userSetToInactive = new EventEmitter<number>();
  userSetToActive = new EventEmitter<number>();
  constructor(private logginService: LoggingService) {
    this.userSetToInactive.subscribe(
      (id: number) => {
        this.onSetToInactive(id);
        this.logginService.userSetToInactive(id);
      }
    )
    this.userSetToActive.subscribe(
      (id: number) => {
        this.onSetToActive(id);
        this.logginService.userSetToActive(id);
      }
    )
  }
  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }
  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
