import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[vfStepContent]'
})
export class StepContentDirective {

  constructor(
    public templateRef: TemplateRef<any>) {}

}
