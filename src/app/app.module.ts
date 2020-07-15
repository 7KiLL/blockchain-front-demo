import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from './modules/layout/layout.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {NzFormModule} from 'ng-zorro-antd';
import {PaymentModule} from './modules/payment/payment.module';
import {TransactionModule} from './modules/transaction/transaction.module';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './core/store/app.reducers';
import {EffectsModule} from '@ngrx/effects';
import {TransactionEffects} from './modules/transaction/store/transaction.effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ApiTokenInterceptor} from './core/auth/interceptors/api-token.interceptor';
import { PurchaseModalComponent } from './core/modals/purchase-modal/purchase-modal.component';
import {PurchaseModalModule} from './core/modals/purchase-modal/purchase-modal.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
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
    PaymentModule,
    TransactionModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([TransactionEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    PurchaseModalModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: en_US},
    {provide: HTTP_INTERCEPTORS, useClass: ApiTokenInterceptor, multi: true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
