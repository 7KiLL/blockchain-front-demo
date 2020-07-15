import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {MockItem} from '../containers/home-items-list/home-items-list.component';
import {delay} from 'rxjs/operators';

@Injectable()
export class MockItemsApi {
  private items: MockItem[] = [
    {
      name: 'Test 1',
      description: 'Test 1 descroption',
      image: 'https://images.unsplash.com/photo-1593443320739-77f74939d0da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
      price: 10
    },
    {
      name: 'Test 2',
      description: 'Test 2 descroption',
      image: 'https://images.unsplash.com/photo-1593443320739-77f74939d0da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
      price: 20
    },
    {
      name: 'Test 3',
      description: 'Test 3 descroption',
      image: 'https://images.unsplash.com/photo-1593443320739-77f74939d0da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
      price: 30
    }
  ];

  fetchItems(): Observable<MockItem[]> {
    return of(this.items).pipe(delay(1000));
  }
}
