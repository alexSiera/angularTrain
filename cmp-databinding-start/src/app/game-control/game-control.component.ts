/* eslint-disable @angular-eslint/no-output-rename */
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output('incrementingNumber') gameStartedEvent = new EventEmitter<number>();
  number = 0;
  gameInterval;
  ngOnInit(): void {
    console.log('Init haappem');
  }
  onGameStart() {
    this.gameInterval = setInterval(() => {
      this.number++;
      this.gameStartedEvent.emit(this.number);
    }, 1000);
  }
  onGameStop() {
    clearInterval(this.gameInterval);
  }
}
