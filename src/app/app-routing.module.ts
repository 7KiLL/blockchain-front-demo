import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Layout} from './modules/layout/layout.enum';


const routes: Routes = [
  {
    path: '',
    data: {
      layout: Layout.Main,
      title: 'Main'
    },
    loadChildren: () => import('./modules/marketplace/marketplace.module').then(m => m.MarketplaceModule)
  },
  {
    path: 'dashboard',
    data: {
      layout: Layout.Dashboard,
      title: 'Dashboard',
    },
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
