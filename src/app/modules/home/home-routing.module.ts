import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeItemsListComponent} from './containers/home-items-list/home-items-list.component';


const routes: Routes = [
  {
    path: '', component: HomeItemsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
