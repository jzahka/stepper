import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdButtonModule } from '@angular/material';
import * as stepper from './stepper.component';
import * as button from './stepper-button.directive';
import * as label from './step-label.directive';
import * as content from './step-content.directive';

const toExport = [
  stepper.StepperComponent,
  stepper.StepComponent,
  stepper.ContentPlaceholderDirective,
  stepper.HeaderPlaceholderDirective,
  content.StepContentDirective,
  button.StepperNextDirective,
  button.StepperPreviousDirective,
  label.StepLabelDirective
];

@NgModule({
  imports: [
    FlexLayoutModule,
    CommonModule,
    MdButtonModule
  ],
  exports: toExport,
  declarations: [
    ...toExport
  ],
  providers: [],
})
export class StepperModule { }
