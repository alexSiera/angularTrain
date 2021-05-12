import { Component } from "@angular/core";

@Component({
  selector: 'app-secret-train',
  templateUrl: './secret-train.html',
  styleUrls: ['./secret-train.css']
})

export class SecretTrainComponent {
  secretActive = false;
  // eventCounter = 0;
  events: string[] = [];
  onToggleSecret() {
    this.secretActive = !this.secretActive;
    this.events.push(`Event timestamp: ${new Date().toString()}`);
    // this.eventCounter +=1;
  };
}
