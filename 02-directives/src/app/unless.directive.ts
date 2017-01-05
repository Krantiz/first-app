import { Directive, TemplateRef,  ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[Unless]'
})
export class UnlessDirective {

	@Input() set unless(condition : boolean){
		if(!condition) {
			this.vcRef.createEmbeddedView(this.templateRef);
		} else {
			this.vcRef.clear();
		}
	}
  constructor(private templateRef:  TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
