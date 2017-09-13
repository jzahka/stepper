import { Directive, HostListener } from '@angular/core';
import { StepperComponent } from './stepper/stepper.component';

@Directive({
  selector: 'button[appStepperNext]'
})
export class StepperNextDirective {
  @HostListener('click') click() {
    this._stepper.next();
  }

  constructor(public _stepper: StepperComponent) { }

}

@Directive({
  selector: 'button[appStepperPrevious]'
})
export class StepperPreviousDirective {
  @HostListener('click') click() {
    this._stepper.previous();
  }

  constructor(public _stepper: StepperComponent) { }

}
