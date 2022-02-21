import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() line?: string;
  @Input() weight?: string;


  constructor(private e:ElementRef) { }
  ngOnInit(): void {}

  @HostListener('mouseenter') onMouseEnter() {
    if (this.line == "underline") {
      this.underlineElement(this.line);
    }
    else if(this.weight == "bold"){
      this.boldElement(this.weight);
    }

  }

  private underlineElement(effect?: string): void {
    this.e.nativeElement.style.textDecoration = effect;
  }
  private boldElement(effect?: string): void {
    this.e.nativeElement.style.fontWeight = effect;
  }



}
