import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() line?: string;
  @Input() weight?: string;
  @Input() border?: string;

  constructor(private e:ElementRef) { }
  ngOnInit(): void {}

  @HostListener('mouseenter') onMouseEnter() {
    if (this.line == "underline") {
      this.underlineElement(this.line);
    }
    else if(this.weight == "bold"){
      this.boldElement(this.weight);
    }
    else{
      this.e.nativeElement.style.borderWidth = '5px';
    }
  }


  private underlineElement(effect?: string): void {
    this.e.nativeElement.style.textDecoration = effect;
  }
  private boldElement(effect?: string): void {
    this.e.nativeElement.style.fontWeight = effect;
  }
  private borderElement(effect?: string): void {
    this.e.nativeElement.style.fontWeight = effect;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.underlineElement('');
    this.boldElement('');
    this.borderElement('');

  }


}
