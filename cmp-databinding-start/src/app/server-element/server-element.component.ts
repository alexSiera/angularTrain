import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // Binding element to be accessible from outside (Without alias)
  // @Input() element: {type: string, name: string, content: string};

  // Binding element to be accessible from outside (With alias srvElement)
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }
}
