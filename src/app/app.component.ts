import {Component, OnInit} from '@angular/core';
import {ActivationStart, Router, RoutesRecognized} from '@angular/router';
import {Layout} from './modules/layout/layout.enum';
import {HttpClient} from '@angular/common/http';
import {distinctUntilChanged, filter} from 'rxjs/operators';

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
    // this.router.events
    //   .pipe(
    //     filter(event => event instanceof RoutesRecognized)
    //   )
    //   .subscribe((data: RoutesRecognized) => {
    //
    //     this.layout = data.state.root.firstChild?.data.layout;
    //     console.log(this.layout);
    //
    //   });

    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        console.log(data.state.root.firstChild);
        this.layout = data.state.root.firstChild.data.layout;
      }
    });

  //   this.router.events
  //     .pipe(
  //       filter(event => event instanceof ActivationStart),
  //     )
  //     .subscribe((route: ActivationStart) => {
  //       this.layout = route.snapshot.data.layout;
  //     });
  }

  private httpTest() {

  }
}
