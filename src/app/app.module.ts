import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StepperComponent, ContentPlaceholderDirective, HeaderPlaceholderDirective,
  StepComponent, StepContentDirective } from './stepper/stepper.component';
import { StepperNextDirective, StepperPreviousDirective } from './stepper-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    StepComponent,
    StepContentDirective,
    StepperNextDirective,
    StepperPreviousDirective,
    ContentPlaceholderDirective,
    HeaderPlaceholderDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
