/* tslint:disable:max-line-length */
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ItemModel} from '../models/item.model';
import {delay} from 'rxjs/operators';

@Injectable()
export class MockItemService {

  private items: ItemModel[] = [{
    src: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'aenean sit',
    price: 53,
    description: 'massa volutpat convallis morbi odio odio',
    store: 'Pierre Cardin'
  }, {
    src: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'lobortis sapien sapien non mi',
    price: 14,
    description: 'diam id ornare imperdiet sapien urna pretium',
    store: 'Xiaomi'
  }, {
    src: 'https://images.unsplash.com/photo-1602443276032-3dfd0f669041?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'at velit',
    price: 48,
    description: 'praesent blandit lacinia erat vestibulum sed magna at nunc commodo',
    store: 'Balmain'
  }, {
    src: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTV8fGphY2tldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'pretium quis lectus',
    price: 91,
    description: 'fermentum justo nec condimentum neque sapien placerat',
    store: 'Balmain'
  }, {
    src: 'https://images.unsplash.com/photo-1527189919029-aeb3d997547d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyZXNzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'amet nulla quisque arcu libero',
    price: 93,
    description: 'ultrices posuere cubilia curae donec pharetra magna vestibulum',
    store: 'Pierre Cardin'
  }, {
    src: 'https://images.unsplash.com/photo-1532181408476-c4cacd791406?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHNtYXJ0cGhvbmV8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'aliquam erat',
    price: 52,
    description: 'donec vitae nisi nam ultrices libero non mattis',
    store: 'Xiaomi'
  }, {
    src: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJlc3N8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'turpis enim',
    price: 60,
    description: 'ridiculus mus etiam vel augue vestibulum',
    store: 'Pierre Cardin'
  }, {
    src: 'https://images.unsplash.com/photo-1589041169060-94c69f192442?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fGRyZXNzfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'ultrices posuere cubilia curae nulla',
    price: 34,
    description: 'quis tortor id nulla ultrices aliquet maecenas leo odio condimentum',
    store: 'Balmain'
  }, {
    src: 'https://images.unsplash.com/photo-1578950114438-ad6ef117ab31?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGNvYXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'sit amet consectetuer',
    price: 43,
    description: 'habitasse platea dictumst maecenas ut',
    store: 'Pierre Cardin'
  }, {
    src: 'https://images.unsplash.com/photo-1556786673-7d9434561ccc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fHNtYXJ0cGhvbmV8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'in faucibus orci luctus et',
    price: 98,
    description: 'vel sem sed sagittis nam congue risus semper porta volutpat',
    store: 'Xiaomi'
  }, {
    src: 'https://images.unsplash.com/photo-1549577380-c76165562d10?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhbnRzfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'eu magna vulputate',
    price: 81,
    description: 'ac leo pellentesque ultrices mattis odio donec vitae',
    store: 'Balmain'
  }, {
    src: 'https://images.unsplash.com/photo-1600075114262-e16b04b2a5d3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nzd8fGRyZXNzfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'maecenas tristique',
    price: 49,
    description: 'consequat varius integer ac leo pellentesque ultrices mattis odio donec',
    store: 'Pierre Cardin'
  }];

  constructor() {
  }

  getItems(): Observable<ItemModel[]> {
    return of(this.items).pipe(delay(500));
  }
}
