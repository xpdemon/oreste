import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BouclierDetailComponent } from './bouclier-detail.component';

describe('BouclierDetailComponent', () => {
  let component: BouclierDetailComponent;
  let fixture: ComponentFixture<BouclierDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouclierDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouclierDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
