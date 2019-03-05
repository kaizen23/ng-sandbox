import { CoinModule } from './../coin/coin.module';
import { MarketRoutingModule } from './market.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './market.component';
import { COIN_CONFIG } from '../configs/coin-config.token';

@NgModule({
  imports: [
    CommonModule,
    MarketRoutingModule,
    CoinModule
  ],
  providers: [
    {provide: COIN_CONFIG, useValue: { isHeader: false}}
  ],
  declarations: [MarketComponent]
})
export class MarketModule { }
