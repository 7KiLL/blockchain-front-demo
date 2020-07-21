import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeContainerComponent} from './containers/home-container/home-container.component';
import {Layout} from '../layout/layout.enum';


const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
    data: {
      layout: Layout.Main,
      title: 'Dashboard',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
