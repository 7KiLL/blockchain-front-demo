import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
import {flatten} from "@angular/compiler";

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('canvasElement') pieChart: ElementRef;

  public completedTransactions$: Observable<ItemModel[]> = this.store.select(selectCompletedTransactions).pipe(
    map(carts => carts.map(cart => cart.items)),
    // @ts-ignore IDE doesnt recognize new ES method
    map(items => items.flat()),

  );
  public walletBalance$ = this.store.select(selectMarketplaceWalletState).pipe(map(wallet => wallet.balance));


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
