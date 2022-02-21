import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() line?: string;


  constructor(private e:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    // if(this.style == "bold"){
    //   this.e.nativeElement.style.textDecoration="bold";
    // }
    // else if(this.style == "underline"){
    //   this.e.nativeElement.style.textDecoration="underline";
    // }
    // else {
    //   this.e.nativeElement.style.borderColor = 'black';
    //   this.e.nativeElement.style.borderWidth="3px";
    // }
    this.underlineElement(this.line);
  }

  // @HostListener('mouseleave') onMouseLeave(){
  //   this.e.nativeElement.removeAttribute('style');
  // }
  // ngOnInit() {
  //   this.e.nativeElement.style.backgroundColor = this.line;
  // }


}


