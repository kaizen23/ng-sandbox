import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SbSpinnerComponent } from './sb-spinner/sb-spinner.component';
import { SbSpinnerDirective } from './sb-spinner.directive';


@NgModule({
  declarations: [
    AppComponent,
    SbSpinnerComponent,
    SbSpinnerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
