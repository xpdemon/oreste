import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PouvoirComponent } from './pouvoir.component';

describe('PouvoirComponent', () => {
  let component: PouvoirComponent;
  let fixture: ComponentFixture<PouvoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PouvoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PouvoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
