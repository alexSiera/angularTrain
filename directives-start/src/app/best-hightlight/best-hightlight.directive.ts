import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBestHightlight]'
})
export class BestHightlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBestHightlight') highlightColor: string = 'blue';
  //Bind host event of component
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    this.renderer.addClass

  }
  // Listening host events
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;

  }
}
