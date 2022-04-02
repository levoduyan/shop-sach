import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorchange]'
})
export class ColorchangeDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseover') mouseover(){
    this.el.nativeElement.style.background="#ffd9b3";
  }
  @HostListener('mouseout') mouseout(){
    this.el.nativeElement.style.background="#fffbee";
  }
}
