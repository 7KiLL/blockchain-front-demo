import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import {ChartJsService} from './services/chart-js.service';


@NgModule({
  declarations: [HomeContainerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [ChartJsService],
})
export class DashboardModule { }
