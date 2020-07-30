import { Component, OnInit } from '@angular/core';
import {SiteSettingsService} from '../../../../core/modules/site-settings/site-settings.service';

@Component({
  selector: 'app-dashboard-layout-footer',
  templateUrl: './dashboard-layout-footer.component.html',
  styleUrls: ['./dashboard-layout-footer.component.scss']
})
export class DashboardLayoutFooterComponent implements OnInit {

  public footerCopyright = this.siteSettingsService.getFooterCopyright();

  constructor(private siteSettingsService: SiteSettingsService) { }

  ngOnInit(): void {
  }

}
