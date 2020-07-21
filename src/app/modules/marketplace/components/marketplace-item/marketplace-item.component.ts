import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {ItemModel} from '../../models/item.model';

@Component({
  selector: 'app-marketplace-item',
  templateUrl: './marketplace-item.component.html',
  styleUrls: ['./marketplace-item.component.scss'],
})
export class MarketplaceItemComponent implements OnInit {
  @HostBinding('class') classList = ['card'];

  @Input() item: ItemModel;
  @Output() onPurchase = new EventEmitter<ItemModel>();

  constructor() { }

  ngOnInit(): void {
  }

  handleItemClick() {
    this.onPurchase.emit(this.item);
  }
}
