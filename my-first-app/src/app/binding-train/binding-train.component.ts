import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-train',
  templateUrl: './binding-train.component.html',
  styleUrls: ['./binding-train.component.css']
})

export class BindingTrainComponent {
  username = ''
  onUserNameSubmit () {
    this.username = "";
  }
}
