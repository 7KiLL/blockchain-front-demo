import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeLayoutComponent } from './some-layout.component';

describe('SomeLayoutComponent', () => {
  let component: SomeLayoutComponent;
  let fixture: ComponentFixture<SomeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
