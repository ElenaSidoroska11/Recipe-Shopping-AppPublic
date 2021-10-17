import { Directive ,HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropdows]'
})
export class DropdowsDirective {
 @HostBinding('class.open') isOpen=false;

@HostListener('click') toggleOpen(){
this.isOpen=!this.isOpen;
}
  constructor() { }

}
