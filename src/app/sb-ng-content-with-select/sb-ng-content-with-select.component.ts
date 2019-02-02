import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sb-ng-content-with-select',
  template: `<div class="bordering">
              <ng-content select="app-sb-selected"></ng-content>
            </div>
            <div>
              <ng-content select="div[role=footer]"></ng-content>
            </div>
            <div>
              <ng-content></ng-content>
            </div>
            `,
  styleUrls: ['./app-sb-ng-content-with-select.scss']
})
export class SbNgContentWithSelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
