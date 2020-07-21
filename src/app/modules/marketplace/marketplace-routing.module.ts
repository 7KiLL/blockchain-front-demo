import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MarketplaceItemListComponent} from './containers/marketplace-item-list/marketplace-item-list.component';
import {Layout} from '../layout/layout.enum';


const routes: Routes = [
  {
    path: '',
    component: MarketplaceItemListComponent,
    data: {
      layout: Layout.Dashboard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketplaceRoutingModule { }
