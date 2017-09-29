import { Directive, HostListener } from '@angular/core';
import { StepperComponent } from './stepper.component';

@Directive({
  selector: 'button[vfStepperNext]'
})
export class StepperNextDirective {
  @HostListener('click') click() {
    this._stepper.next();
  }

  constructor(public _stepper: StepperComponent) { }

}

@Directive({
  selector: 'button[vfStepperPrevious]'
})
export class StepperPreviousDirective {
  @HostListener('click') click() {
    this._stepper.previous();
  }

  constructor(public _stepper: StepperComponent) { }

}
