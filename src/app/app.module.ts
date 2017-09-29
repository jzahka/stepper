import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StepperModule } from './stepper';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
