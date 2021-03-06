import { Component, OnInit } from '@angular/core';
import {SiteSettingsService} from '../../../../core/modules/site-settings/site-settings.service';

@Component({
  selector: 'app-main-layout-footer',
  templateUrl: './main-layout-footer.component.html',
  styleUrls: ['./main-layout-footer.component.scss']
})
export class MainLayoutFooterComponent implements OnInit {

  public footerCopyright = this.siteSettingsService.getFooterCopyright();

  constructor(private siteSettingsService: SiteSettingsService) { }

  ngOnInit(): void {
  }

}
