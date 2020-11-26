import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ItemModel} from '../models/item.model';
import {delay} from 'rxjs/operators';

@Injectable()
export class MockItemService {

  private items: ItemModel[] = [{
    src: 'https://images.unsplash.com/photo-1594046242234-52a439067587?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'aenean sit',
    price: 53,
    description: 'massa volutpat convallis morbi odio odio',
    store: 'Pierre Cardin'
  }, {
    src: 'https://images.unsplash.com/photo-1594491084435-07c418f83735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'lobortis sapien sapien non mi',
    price: 14,
    description: 'diam id ornare imperdiet sapien urna pretium',
    store: 'Xiaomi'
  }, {
    src: 'https://images.unsplash.com/photo-1594488506255-a8bbfdeedbaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'at velit',
    price: 48,
    description: 'praesent blandit lacinia erat vestibulum sed magna at nunc commodo',
    store: 'Balmain'
  }, {
    src: 'https://images.unsplash.com/photo-1594492415237-24f03f84c506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'pretium quis lectus',
    price: 91,
    description: 'fermentum justo nec condimentum neque sapien placerat',
    store: 'Balmain'
  }, {
    src: 'https://images.unsplash.com/photo-1593791935086-75516605a5d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'amet nulla quisque arcu libero',
    price: 93,
    description: 'ultrices posuere cubilia curae donec pharetra magna vestibulum',
    store: 'Pierre Cardin'
  }, {
    src: 'https://images.unsplash.com/photo-1593723447295-0c48ba723d3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'aliquam erat',
    price: 52,
    description: 'donec vitae nisi nam ultrices libero non mattis',
    store: 'Xiaomi'
  }, {
    src: 'https://images.unsplash.com/photo-1593926365674-ac277753ab76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'turpis enim',
    price: 60,
    description: 'ridiculus mus etiam vel augue vestibulum',
    store: 'Pierre Cardin'
  }, {
    src: 'https://images.unsplash.com/photo-1593543294918-ca3634e04cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'ultrices posuere cubilia curae nulla',
    price: 34,
    description: 'quis tortor id nulla ultrices aliquet maecenas leo odio condimentum',
    store: 'Balmain'
  }, {
    src: 'https://images.unsplash.com/photo-1593424718424-cf4d83f3def1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'sit amet consectetuer',
    price: 43,
    description: 'habitasse platea dictumst maecenas ut',
    store: 'Pierre Cardin'
  }, {
    src: 'https://images.unsplash.com/photo-1567769541695-3598ee6ea57b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'in faucibus orci luctus et',
    price: 98,
    description: 'vel sem sed sagittis nam congue risus semper porta volutpat',
    store: 'Balmain'
  }, {
    src: 'https://images.unsplash.com/photo-1593114970350-a491e24c0d7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'eu magna vulputate',
    price: 81,
    description: 'ac leo pellentesque ultrices mattis odio donec vitae',
    store: 'Xiaomi'
  }, {
    src: 'https://images.unsplash.com/photo-1593089762614-705b8fa9b875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
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
