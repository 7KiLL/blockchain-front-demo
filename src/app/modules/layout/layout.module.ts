import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import { SomeLayoutComponent } from './some-layout/some-layout.component';
import {RouterModule} from '@angular/router';
import {NzGridModule, NzLayoutModule, NzMenuModule} from 'ng-zorro-antd';
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
    ],
  exports: [
    MainLayoutComponent,
    SomeLayoutComponent
  ]
})
export class LayoutModule { }
