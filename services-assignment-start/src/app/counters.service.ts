
export class CountersService {
  inactiveUsersActionNumber = 0;
  activeUsersActionNumber = 0;
  constructor() {}
  onInactiveUsersIncease() {
    this.inactiveUsersActionNumber += 1;
    console.log('Active to inactive: ', this.inactiveUsersActionNumber);
  };
  onActiveUsersIncrease() {
    this.activeUsersActionNumber += 1;
    console.log('Inactive to active: ', this.activeUsersActionNumber);
  }
}

