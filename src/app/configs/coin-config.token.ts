import { InjectionToken } from '@angular/core';

export const COIN_CONFIG =
  new InjectionToken<CoinConfig>('coin-config');

export interface CoinConfig {
  isHeader: boolean;
}
