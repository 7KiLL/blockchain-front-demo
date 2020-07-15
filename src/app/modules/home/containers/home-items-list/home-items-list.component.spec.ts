import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeItemsListComponent } from './home-items-list.component';

describe('HomeItemsListComponent', () => {
  let component: HomeItemsListComponent;
  let fixture: ComponentFixture<HomeItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
