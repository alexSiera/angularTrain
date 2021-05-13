import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentType = '';
  onNavbarLinkChange(type: string) {
    this.componentType = type;
  }
}
