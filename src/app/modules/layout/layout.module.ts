import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {RouterModule} from '@angular/router';

import { MainLayoutHeaderComponent } from './main-layout/main-layout-header/main-layout-header.component';
import { MainLayoutFooterComponent } from './main-layout/main-layout-footer/main-layout-footer.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardLayoutHeaderComponent } from './dashboard-layout/dashboard-layout-header/dashboard-layout-header.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    MainLayoutHeaderComponent,
    MainLayoutFooterComponent,
    DashboardLayoutComponent,
    DashboardLayoutHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    MainLayoutComponent,
    DashboardLayoutComponent
  ]
})
export class LayoutModule { }
