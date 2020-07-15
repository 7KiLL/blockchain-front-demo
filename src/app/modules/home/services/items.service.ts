import {Injectable} from '@angular/core';
import {MockItemsApi} from '../api/mock-items.api';
import {Observable} from 'rxjs';
import {MockItem} from '../containers/home-items-list/home-items-list.component';


@Injectable()
export class ItemsService {

  constructor(private mockItemsApi: MockItemsApi) {
  }

  getItems(): Observable<MockItem[]> {
    return this.mockItemsApi.fetchItems();
  }


}
