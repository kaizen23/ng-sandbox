import { Directive, ComponentRef, ComponentFactory, HostBinding, Input } from '@angular/core';
import { SbSpinnerComponent } from './sb-spinner/sb-spinner.component';

@Directive({
  selector: '[appSbSpinner]'
})
export class SbSpinnerDirective {
  spinner: ComponentRef<SbSpinnerComponent>;
  componentFactory: ComponentFactory<SbSpinnerComponent>;

  @HostBinding('class.sb-spinner-container') isSpinnerExist = false;

  // tslint:disable-next-line:no-input-rename
  @Input('sbMessage') spinnerMessage: string;
  // tslint:disable-next-line:no-input-rename
  @Input('sbSize') spinnerSize: string;
  // tslint:disable-next-line:no-input-rename
  @Input('sbStatus') spinnerStatus: string;

  constructor() { }

}
