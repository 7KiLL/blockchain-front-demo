import {Component, OnInit} from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';
import {Layout} from './modules/layout/layout.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blockchain-front';
  layout: Layout;
  Layout = Layout;

  constructor(private router: Router) {
  }
  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.layout = data.state.root.firstChild.data.layout;
      }
    });
  }

}
