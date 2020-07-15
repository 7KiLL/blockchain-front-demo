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

  private routeChange: Observable<ActivationStart> = this.router.events.pipe(
    filter(event => event instanceof ActivationStart),
    map(event => event as ActivationStart)
  );

  public headerTitle = this.routeChange.pipe(
    map((event: ActivationStart) => {
      return event.snapshot.data?.title ?? '';
    })
  );

  public hasParent = this.routeChange.pipe(
    map(route => route.snapshot.parent.url.length ? '' : null)
  );

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof ActivationStart),
      distinctUntilChanged(),
    ).subscribe((result: ActivationStart) => {
      if (result.snapshot.parent.url.length) {
        console.log('Has parent');
      }
    });
  }

  onBack() {
    this.router.navigate(['']);
  }
}
