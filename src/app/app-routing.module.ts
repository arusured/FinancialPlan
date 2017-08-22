import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { FamilyComponent } from './family/family.component';
import { IncomeConfirmationComponent } from './income-confirmation/income-confirmation.component';
import { LifeEventComponent } from './life-event/life-event.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'family', pathMatch: 'full'}, //ルートはfamilyにリダイレクトする。
  { path: '**', component: PageNotFoundComponent}, //無いページへのアクセスは、PageNotFoundへ。
  { path: 'balance-sheet', component: BalanceSheetComponent},
  { path: 'cash-flow', component: CashFlowComponent},
  { path: 'family', component: FamilyComponent},
  { path: 'income-confirmation', component: IncomeConfirmationComponent},
  { path: 'life-event', component: LifeEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
