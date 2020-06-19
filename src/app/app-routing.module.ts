import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Layout} from './modules/layout/layout.enum';
import {PaymentContainerComponent} from './modules/payment/containers/payment-container/payment-container.component';
import {TransactionListComponent} from './modules/transaction/containers/transaction-list/transaction-list.component';


const routes: Routes = [
  {
    path: '',
    data: {
      layout: Layout.Main
    },
    component: TransactionListComponent
  },
  {
    path: 'payment',
    component: PaymentContainerComponent,
    data: {
      layout: Layout.Main
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
