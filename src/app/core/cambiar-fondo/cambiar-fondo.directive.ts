import { Directive, HostListener, HostBinding } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer } from '@angular/core';

@Directive({
  selector: '[appCambiarFondo]'
})
export class CambiarFondoDirective {

  @HostBinding('style.border-radius') border: any;

  constructor(private elemetRef: ElementRef, private  rendered:  Renderer) {
     rendered.setElementStyle(elemetRef.nativeElement, 'backgroundColor', 'red');
  }


  @HostListener('mouseover')
  mouseOver () {
    this.rendered.setElementStyle(this.elemetRef.nativeElement,'backgroundColor', 'blue');
    this.border = '30px';
  }
  @HostListener('mouseout')
  mouseOut() {
    this.rendered.setElementStyle(this.elemetRef.nativeElement,'backgroundColor', 'red');
  }

}
