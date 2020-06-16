import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaymentFormComponent} from './payment-form/payment-form.component';
import {NzButtonModule, NzCardModule, NzCheckboxModule, NzFormModule, NzInputModule} from 'ng-zorro-antd';
import {ReactiveFormsModule} from '@angular/forms';
import { PaymentContainerComponent } from './containers/payment-container/payment-container.component';



@NgModule({
  declarations: [PaymentFormComponent, PaymentContainerComponent],
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzButtonModule,
    NzCardModule
  ],
  exports: [
    PaymentFormComponent
  ]
})
export class PaymentModule { }
