import {Component, OnInit} from '@angular/core';
import {ActivationStart, Router} from '@angular/router';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main-layout-header',
  templateUrl: './main-layout-header.component.html',
  styleUrls: ['./main-layout-header.component.scss']
})
export class MainLayoutHeaderComponent implements OnInit {

 ngOnInit(): void {
 }
}
