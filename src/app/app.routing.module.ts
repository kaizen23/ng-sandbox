import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'coin', loadChildren: './coin/coin.module#CoinModule' },
    { path: 'market', loadChildren: './market/market.module#MarketModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
