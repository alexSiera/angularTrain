import { CountersService } from './counters.service';
import { LoggingService } from './logging.service';
import { EventEmitter, Injectable } from '@angular/core';
@Injectable()

export class UsersService {
  activeUsers: string[] = ['Max', 'Anna'];
  inactiveUsers: string[] = ['Test', 'Alex'];

  userSetToInactive = new EventEmitter<number>();
  userSetToActive = new EventEmitter<number>();
  constructor(private logginService: LoggingService, private counterService: CountersService) {
    this.userSetToInactive.subscribe(
      (id: number) => {
        this.onSetToInactive(id);
        this.logginService.userSetToInactive(id);
        this.counterService.onInactiveUsersIncease();
      }
    )
    this.userSetToActive.subscribe(
      (id: number) => {
        this.onSetToActive(id);
        this.logginService.userSetToActive(id);
        this.counterService.onActiveUsersIncrease();
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
