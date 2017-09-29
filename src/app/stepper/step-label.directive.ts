import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[vfStepLabel]'
})
export class StepLabelDirective {

  constructor(
    public templateRef: TemplateRef<any>) {}

}
