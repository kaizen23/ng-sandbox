import { Component, OnInit, Inject, Optional } from '@angular/core';
import { COIN_CONFIG, CoinConfig } from '../configs/coin-config.token';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {

  config = {
    isHeader: true
  };

  constructor(@Optional() @Inject(COIN_CONFIG) globalConfig: CoinConfig) {
          this.config = globalConfig ? Object.assign(this.config, globalConfig) : this.config;
  }

  ngOnInit() {
  }

}
