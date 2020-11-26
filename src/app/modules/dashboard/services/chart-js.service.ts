import {ElementRef, Injectable, OnDestroy} from '@angular/core';
import {Chart} from 'chart.js';
import {ChartExtended} from '../interfaces/chart-extended';
import {ChartOptionsExtended} from '../interfaces/chart-options-extended';
import {WalletModel} from '../../marketplace/models/wallet.model';

@Injectable()
export class ChartJsService implements OnDestroy {

  private chartInstance: ChartExtended;

  constructor() {
    this.registerCenterTextPlugin();
  }

  ngOnDestroy() {
  }

  public setupInstance(ctx: any) {
    this.chartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Personal wallet', 'Advertising', 'Development', 'Xiaomi', 'Balman', 'Pierre Cardin'],
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
      centerText: {
        display: true,
        text: '0€'
      }
    } as ChartOptionsExtended) as ChartExtended;
  }

  private registerCenterTextPlugin(): void {
    Chart.pluginService.register({
      beforeDraw(chart: ChartExtended) {
        function drawTotals(chartExtended: ChartExtended) {
          const width = chartExtended.chart.width;
          const height = chartExtended.chart.height;
          const ctx = chartExtended.chart.ctx;

          ctx.restore();
          const fontSize = (height / 114).toFixed(2);
          ctx.font = fontSize + 'em sans-serif';
          ctx.textBaseline = 'middle';

          const text = chartExtended.config.centerText.text;
          const textX = Math.round((width - ctx.measureText(text).width) / 2);
          const textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
        }

        if (chart.config.centerText.display !== null &&
          typeof chart.config.centerText.display !== 'undefined' &&
          chart.config.centerText.display) {
          drawTotals(chart);
        }
      },

    });
  }

  public refillChart(wallet: WalletModel) {
    this.chartInstance.config.centerText.text = `${wallet.balance}€`;
    this.chartInstance.data.datasets[0].data = [wallet.sub1, wallet.sub2, wallet.sub3, wallet.sub4, wallet.sub5, wallet.sub6];
    this.chartInstance.update({});
  }
}
