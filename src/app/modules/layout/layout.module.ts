import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import { SomeLayoutComponent } from './some-layout/some-layout.component';
import {RouterModule} from '@angular/router';
import {NzLayoutModule} from 'ng-zorro-antd';



@NgModule({
  declarations: [
    MainLayoutComponent,
    SomeLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
  ],
  exports: [
    MainLayoutComponent,
    SomeLayoutComponent
  ]
})
export class LayoutModule { }
