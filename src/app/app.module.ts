import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from './modules/layout/layout.module';
import {TestComponent} from './test/test.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {NzFormModule} from 'ng-zorro-antd';
import {PaymentModule} from './modules/payment/payment.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzFormModule,
    PaymentModule
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
