import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output('onMenuItemSelect') select = new EventEmitter<string>();
  onSelect(type: string) {
      this.select.emit(type);
  }
}
