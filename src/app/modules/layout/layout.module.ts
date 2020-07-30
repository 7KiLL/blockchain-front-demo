import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {RouterModule} from '@angular/router';

import { MainLayoutHeaderComponent } from './main-layout/main-layout-header/main-layout-header.component';
import { MainLayoutFooterComponent } from './main-layout/main-layout-footer/main-layout-footer.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardLayoutHeaderComponent } from './dashboard-layout/dashboard-layout-header/dashboard-layout-header.component';
import { DashboardLayoutFooterComponent } from './dashboard-layout/dashboard-layout-footer/dashboard-layout-footer.component';
import {SiteSettingsModule} from '../../core/modules/site-settings/site-settings.module';



@NgModule({
  declarations: [
    MainLayoutComponent,
    MainLayoutHeaderComponent,
    MainLayoutFooterComponent,
    DashboardLayoutComponent,
    DashboardLayoutHeaderComponent,
    DashboardLayoutFooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SiteSettingsModule
  ],
  exports: [
    MainLayoutComponent,
    DashboardLayoutComponent
  ]
})
export class LayoutModule { }
