import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class LoggingService {
  userSetToInactive(userId: number) {
    console.log(`User with id: ${userId} was set to inactive`);
  }
  userSetToActive(userId: number) {
    console.log(`User with id: ${userId} was set to active`);
  }
}
