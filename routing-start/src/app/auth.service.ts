export class AuthService {
  loggedIn = false;
  isAuthentificated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.loggedIn), 800)
    })
  }
  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}
