import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../../services/items.service';

export interface MockItem {
  image: string;
  price: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-home-items-list',
  templateUrl: './home-items-list.component.html',
  styleUrls: ['./home-items-list.component.scss']
})
export class HomeItemsListComponent implements OnInit {

  public items$ = this.itemsService.getItems();

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
  }

}
