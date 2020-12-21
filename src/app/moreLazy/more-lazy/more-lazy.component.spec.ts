import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreLazyComponent } from './more-lazy.component';

describe('MoreLazyComponent', () => {
  let component: MoreLazyComponent;
  let fixture: ComponentFixture<MoreLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
