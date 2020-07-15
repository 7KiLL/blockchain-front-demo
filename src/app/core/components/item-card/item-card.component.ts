import {Component, Input, OnInit} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd/modal';
import {PurchaseModalComponent} from '../../modals/purchase-modal/purchase-modal.component';
import {MockItem} from '../../../modules/home/containers/home-items-list/home-items-list.component';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() item: MockItem;

  constructor(private modal: NzModalService) { }

  ngOnInit(): void {
  }

  handlePurchase() {
    const modal = this.modal.create({
      nzContent: PurchaseModalComponent
    });
  }
}
