import {Component, OnInit} from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';
import {Layout} from './modules/layout/layout.enum';
import {HttpClient} from '@angular/common/http';
import {ITransaction} from './modules/transaction/models/transaction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blockchain-front';
  layout: Layout;
  Layout = Layout;

  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.layoutSetup();
    this.httpTest();
  }

  private layoutSetup() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.layout = data.state.root.firstChild?.data.layout;
      }
    });
  }

  private httpTest() {
    this.http.get<ITransaction>(`https://jsonplaceholder.typicode.com/todos/1`)
      .subscribe(res => {
        console.log(res);
      });
  }
}
