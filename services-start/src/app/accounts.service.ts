import { Account } from './../shared/account.model';

export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  addAccount(name: string, status: string) {
    console.log('Hi I am add account', name, status)
    this.accounts.push({name, status})
  }
  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
