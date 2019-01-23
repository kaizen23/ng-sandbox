import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-sb-spinner',
  templateUrl: './sb-spinner.component.html',
  styleUrls: ['./sb-spinner.component.scss']
})
export class SbSpinnerComponent {
  static readonly SIZE_MEDIUM = 'medium';
  static readonly SIZE_SMALL = 'small';

  size: string = SbSpinnerComponent.SIZE_MEDIUM;

  @Input() message: string = 'loading...';
  @Input('size')
  private set setSize(value: string) {
    this.size = value;
  }

  @HostBinding('class.small-spinner')
  get small() {
    return this.size === SbSpinnerComponent.SIZE_SMALL;
  }
  @HostBinding('class.medium-spinner')
  get medium() {
    return this.size === SbSpinnerComponent.SIZE_MEDIUM;
  }

}
