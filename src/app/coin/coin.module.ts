import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinComponent } from './coin.component';
import { CoinRoutingModule } from './coin.routing.module';
import { COIN_CONFIG } from '../configs/coin-config.token';

@NgModule({
  imports: [
    CommonModule,
    CoinRoutingModule
  ],
  providers: [
    {provide: COIN_CONFIG, useValue: { isHeader: true}}
  ],
  declarations: [CoinComponent],
  exports: [
    CoinComponent
  ]
})
export class CoinModule { }
