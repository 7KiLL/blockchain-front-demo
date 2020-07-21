import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ItemModel} from '../../models/item.model';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../core/store/app.state';
import {selectMarketplaceLoadingState} from '../../store/marketplace.selectors';

@Component({
  selector: 'app-purchase-modal',
  templateUrl: './purchase-modal.component.html',
  styleUrls: ['./purchase-modal.component.scss']
})
export class PurchaseModalComponent implements OnInit {
  public activeItem: ItemModel;
  public isLoading = this.store.select(selectMarketplaceLoadingState);

  @Output() checkout = new EventEmitter<ItemModel>();

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
  }

  fillModal(item: ItemModel) {
    this.activeItem = item;
  }

  checkoutItem(event) {
    event.preventDefault();
    this.checkout.emit(this.activeItem);
  }
}
