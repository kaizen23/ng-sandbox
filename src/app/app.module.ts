import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SbSpinnerComponent } from './sb-spinner/sb-spinner.component';
import { SbSpinnerDirective } from './sb-spinner.directive';
import { TestSubjectComponent } from './test-subject/test-subject.component';
import { SbNgContentWithSelectComponent } from './sb-ng-content-with-select/sb-ng-content-with-select.component';
import { SbSelectedComponent } from './sb-selected/sb-selected.component';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    SbSpinnerComponent,
    SbSpinnerDirective,
    TestSubjectComponent,
    SbNgContentWithSelectComponent,
    SbSelectedComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
