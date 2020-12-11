/* tslint:disable:max-line-length */
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ItemModel} from '../models/item.model';
import {delay} from 'rxjs/operators';

@Injectable()
export class MockItemService {

  private items: ItemModel[] = [{
    src: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Wool mid-length dress',
    price: 53,
    description: 'Women Long Sleeve V Neck Dress Floral Mini Swing Party',
    store: 'Pierre Cardin'
  }, {
    src: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Xiaomi Mi',
    price: 14,
    description: '10T 128GB, 6.67" DotDisplay, 64MP Triple Rear Camera, 8K Video, 5000 mAh Battery LTE 5G',
    store: 'Xiaomi'
  }, {
    src: 'https://images.unsplash.com/photo-1602443276032-3dfd0f669041?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Winter Coat',
    price: 48,
    description: 'Men\'s Packable Insulated Warm Hooded Puffer Down Jacket',
    store: 'Balmain'
  }, {
    src: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTV8fGphY2tldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Raincoat Jacket',
    price: 91,
    description: 'Men\'s Waterproof Jacket Warm Winter Snow Coat Mountain Windbreaker',
    store: 'Balmain'
  }, {
    src: 'https://images.unsplash.com/photo-1527189919029-aeb3d997547d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyZXNzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Silk maxi dress',
    price: 93,
    description: 'CozyChic Ultra Lite Caftan',
    store: 'Pierre Cardin'
  }, {
    src: 'https://images.unsplash.com/photo-1532181408476-c4cacd791406?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHNtYXJ0cGhvbmV8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Redmi 9A',
    price: 52,
    description: '32GB, 2GB RAM, 6.53" HD 13 MP Rear Camera, LTE',
    store: 'Xiaomi'
  }, {
    src: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJlc3N8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Maxi dress',
    price: 60,
    description: 'Women’s Elegant Long Lantern Sleeve Short Dress Crewneck Tie',
    store: 'Pierre Cardin'
  }, {
    src: 'https://images.unsplash.com/photo-1589041169060-94c69f192442?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fGRyZXNzfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Pajama Dress',
    price: 34,
    description: 'Women\'s Nightshirt Short Sleeve Button Down Nightgown V-Neck Sleepwear',
    store: 'Balmain'
  }, {
    src: 'https://images.unsplash.com/photo-1578950114438-ad6ef117ab31?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGNvYXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Dress',
    price: 43,
    description: 'Women\'s Long Sleeve Scoop Neck Button Side Sweater Tunic Dress',
    store: 'Pierre Cardin'
  }, {
    src: 'https://images.unsplash.com/photo-1556786673-7d9434561ccc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fHNtYXJ0cGhvbmV8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Redmi Note 9S',
    price: 98,
    description: '128GB, 6.67", 4K Camera, 18W Fast Charge, 5020mAh Battery, Dual SIM, 4G LTE',
    store: 'Xiaomi'
  }, {
    src: 'https://images.unsplash.com/photo-1549577380-c76165562d10?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhbnRzfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Puffer Jacket',
    price: 81,
    description: 'Essentials Men\'s Lightweight Water-Resistant Packable Jacket',
    store: 'Balmain'
  }, {
    src: 'https://images.unsplash.com/photo-1600075114262-e16b04b2a5d3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nzd8fGRyZXNzfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Silk mid-length dress',
    price: 49,
    description: 'Women\'s Dress Sweet & Cute V-Neck Bell Sleeve Shift Dress Mini',
    store: 'Pierre Cardin'
  }];

  constructor() {
  }

  getItems(): Observable<ItemModel[]> {
    return of(this.items).pipe(delay(500));
  }
}
