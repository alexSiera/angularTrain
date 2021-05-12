import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})

export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
  getServerStatus(serverId: number) {
    if (serverId === 10) return 'offline'
    return 'online'
  }
}