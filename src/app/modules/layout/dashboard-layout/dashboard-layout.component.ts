import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss', './assets/sb-admin-2.min.css', '../../../../assets/fontawesome-free/css/all.min.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DashboardLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
