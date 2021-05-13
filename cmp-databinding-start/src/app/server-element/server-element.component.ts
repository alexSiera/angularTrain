/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // None, native --- It is simply make styles wide to the whole app or connected to the component only....
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // Binding element to be accessible from outside (Without alias)
  // @Input() element: {type: string, name: string, content: string};
  // Binding element to be accessible from outside (With alias srvElement)
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    // console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges  called!', changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit  called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Paragraph Content: ' + this.paragraph.nativeElement.textContent);
  }
  ngDoCheck() {
    // console.log('ngDoCheck  called!');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit  called!');
    console.log('Paragraph Content: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked  called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit  called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked  called!');
  }
  ngOnDestroy(): void {
    // console.log('ngOnDestroy  called!');
  }
}
