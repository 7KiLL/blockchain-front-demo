import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from './modules/layout/layout.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './core/store/app.reducers';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ApiTokenInterceptor} from './core/auth/interceptors/api-token.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MarketplaceEffects} from './modules/marketplace/store/marketplace.effects';

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
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([MarketplaceEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    NgbModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiTokenInterceptor, multi: true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
