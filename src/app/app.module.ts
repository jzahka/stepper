import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { StepperComponent, ContentPlaceholderDirective, HeaderPlaceholderDirective,
  StepComponent, StepContentDirective, StepLabelDirective } from './stepper/stepper.component';
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
    HeaderPlaceholderDirective,
    StepLabelDirective
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MdListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
