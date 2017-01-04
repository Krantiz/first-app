import { Directive , ElementRef , Renderer , HostListener , HostBinding} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'//This is a css selector or you can say an attribute on HTML element
  //selector: 'dirHighlight' class representation
  //selector: '#dirHighlight' id represtation


})
export class HighlightDirective {
	/*For custom Directive calls*/

  // constructor(private elementRef : ElementRef, private renderer : Renderer) { 
  // 	//Injecting instatnces of classes
  // 	this.elementRef.nativeElement.style.backgroundColor = 'black';
  // 	//another better way to do it
  // 	this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'brown')

  // }




  /*Element interaction with Host binding or HostListener*/
  private backgroundColor = 'white';
  @HostListener('mouseenter') mouseover() { //mouseenter is the event
  	this.backgroundColor = 'green';
  }; 
  @HostListener('mouseleave') mouseleave() { //mouseenter is the event
  	this.backgroundColor = 'blue';
  }; 


  //by using 'get' we are making it read-only property

  @HostBinding('style.backgroundColor') get setColor(){
  	return this.backgroundColor;
  }
  constructor(){

  }

}
