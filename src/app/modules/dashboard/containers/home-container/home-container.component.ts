import {Component, ElementRef, OnDestroy, ViewChild, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../core/store/app.state';
import {
  selectCompletedTransactions,
  selectMarketplaceWalletState
} from '../../../marketplace/store/marketplace.selectors';
import {Observable, Subscription} from 'rxjs';
import {buffer, bufferTime, filter, map, mergeAll, scan, tap} from 'rxjs/operators';
import {ChartJsService} from '../../services/chart-js.service';
import {ItemModel} from '../../../marketplace/models/item.model';
import {flatten} from '@angular/compiler';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnDestroy, OnInit {

  @ViewChild('canvasElement') pieChart: ElementRef;

  public completedTransactions$: Observable<ItemModel[]> = this.store.select(selectCompletedTransactions).pipe(
    map(carts => carts.map(cart => cart.items)),
    // @ts-ignore IDE doesnt recognize new ES method
    map(items => items.flat()),
  );
  public walletBalance$ = this.store.select(selectMarketplaceWalletState).pipe(map(wallet => wallet.balance));

  private subscription = new Subscription();

  private listingTitles = ['Personal wallet', 'Advertising', 'Development', 'Xiaomi', 'Balman', 'Pierre Cardin'];

  public listingObjects: {title: string, value: number}[];

  public listingTotal: number;

  constructor(
    private store: Store<IAppState>,
    private chartJsService: ChartJsService,
    ) {
  }

  ngOnInit() {
    this.subscription = this.store.select(selectMarketplaceWalletState).subscribe(wallet => {
      this.mapListing(wallet);
    });
    }

  // ngAfterViewInit() {
    // this.chartSetup();
    // this.subscription = this.store.select(selectMarketplaceWalletState).subscribe(wallet => {
      // this.chartJsService.refillChart(wallet);
    // });
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // private chartSetup() {
  //   const ctx = this.pieChart.nativeElement;
  //   this.chartJsService.setupInstance(ctx);
  // }

  private mapListing(wallet) {
    const values = [wallet.sub1, wallet.sub2, wallet.sub3, wallet.sub4, wallet.sub5, wallet.sub6];
    const mappedArray = this.listingTitles.map((title, index) => {
      return {
        title,
        value: values[index].toFixed(2),
      };
    });
    this.listingObjects = mappedArray.filter(item => item.value > 0);
    this.listingTotal = values.reduce((a, b) => a + b).toFixed(2);
  }

}
