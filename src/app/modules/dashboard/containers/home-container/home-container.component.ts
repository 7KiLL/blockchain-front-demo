import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {Chart} from 'chart.js';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../core/store/app.state';
import {selectMarketplaceTransactionsState, selectMarketplaceWalletState} from '../../../marketplace/store/marketplace.selectors';
import {WalletModel} from '../../../marketplace/models/wallet.model';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {ChartOptionsExtended} from '../../interfaces/chart-options-extended';
import {ChartExtended} from '../../interfaces/chart-extended';
import {ChartJsService} from '../../services/chart-js.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('canvasElement') pieChart: ElementRef;

  public walletBalance$ = this.store.select(selectMarketplaceWalletState).pipe(map(wallet => wallet.balance));
  public transactions$ = this.store.select(selectMarketplaceTransactionsState);

  private subscription = new Subscription();

  constructor(private store: Store<IAppState>, private chartJsService: ChartJsService) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.chartSetup();
    this.subscription = this.store.select(selectMarketplaceWalletState).subscribe(wallet => {
      this.chartJsService.refillChart(wallet);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private chartSetup() {
    const ctx = this.pieChart.nativeElement;
    this.chartJsService.setupInstance(ctx);
  }

}
