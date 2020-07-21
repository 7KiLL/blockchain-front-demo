import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {Chart} from 'chart.js';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../core/store/app.state';
import {selectMarketplaceTransactionsState, selectMarketplaceWalletState} from '../../../marketplace/store/marketplace.selectors';
import {WalletModel} from '../../../marketplace/models/wallet.model';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('canvasElement') pieChart: ElementRef;

  public walletBalance$ = this.store.select(selectMarketplaceWalletState).pipe(map(wallet => wallet.balance));
  public transactions$ = this.store.select(selectMarketplaceTransactionsState);

  private pieChartInstance: Chart;

  private subscription = new Subscription();

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.chartSetup();
    this.subscription = this.store.select(selectMarketplaceWalletState).subscribe(wallet => {
      this.refillChart(wallet);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private chartSetup() {
    const ctx = this.pieChart.nativeElement;
    this.pieChartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Sub-wallet 1', 'Sub-wallet 2', 'Sub-wallet 3', 'Sub-wallet 4', 'Sub-wallet 5', 'Sub-wallet 6'],
        datasets: [{
          data: [0, 0, 0, 0, 0, 0],
          backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#D16BA5', '#86A8E7', '#5FFBF1'],
          hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf', '#BC5E90', '#6183BF', '#56D1C7'],
          hoverBorderColor: 'rgba(234, 236, 244, 1)',
        }],
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: 'rgb(255,255,255)',
          bodyFontColor: '#858796',
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,
          callbacks: {
            label(tooltipItem: Chart.ChartTooltipItem, data: Chart.ChartData): string | string[] {
              console.log(tooltipItem, data);
              // @ts-ignore
              const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toFixed(2) + '€';
              const label = data.labels[tooltipItem.index] as string;

              // return `${label}: ${value}`;
              return [label, value];
            }
          }
        },
        legend: {
          display: false
        },
        cutoutPercentage: 80,
      },
    });
  }

  private refillChart(wallet: WalletModel) {
    this.pieChartInstance.data.datasets[0].data = [wallet.sub1, wallet.sub2, wallet.sub3, wallet.sub4, wallet.sub5, wallet.sub6];
    this.pieChartInstance.update({

    });
  }
}
