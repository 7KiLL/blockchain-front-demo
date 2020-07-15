import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import { SomeLayoutComponent } from './some-layout/some-layout.component';
import {RouterModule} from '@angular/router';
import {
  NzBreadCrumbModule,
  NzDropDownModule,
  NzGridModule,
  NzLayoutModule,
  NzMenuModule,
  NzPageHeaderModule,
  NzTagModule,
  NzNoAnimationModule, NzIconModule, NzTypographyModule, NzButtonModule
} from 'ng-zorro-antd';

import { MainLayoutHeaderComponent } from './main-layout/main-layout-header/main-layout-header.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    SomeLayoutComponent,
    MainLayoutHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzGridModule,
    NzMenuModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    NzTagModule,
    NzDropDownModule,
    NzNoAnimationModule,
    NzIconModule,
    NzTypographyModule,
    NzButtonModule,
  ],
  exports: [
    MainLayoutComponent,
    SomeLayoutComponent
  ]
})
export class LayoutModule { }
