import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PouvoirDetailComponent } from './pouvoir-detail.component';

describe('PouvoirDetailComponent', () => {
  let component: PouvoirDetailComponent;
  let fixture: ComponentFixture<PouvoirDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PouvoirDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PouvoirDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
