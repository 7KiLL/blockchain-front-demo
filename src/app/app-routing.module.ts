import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './test/test.component';
import {Layout} from './modules/layout/layout.enum';
import {PaymentFormComponent} from './modules/payment/payment-form/payment-form.component';
import {PaymentContainerComponent} from './modules/payment/containers/payment-container/payment-container.component';


const routes: Routes = [
  {
    path: 'main',
    data: {
      layout: Layout.Main
    },
    component: TestComponent
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
