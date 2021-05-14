import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  isOpen = false;
  @HostBinding('classList') classNameList: string = 'btn';

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    if(!this.isOpen) {
      this.classNameList = this.classNameList.concat(' open');
    }
    else {
      this.classNameList = 'btn';
    }
  }
}
