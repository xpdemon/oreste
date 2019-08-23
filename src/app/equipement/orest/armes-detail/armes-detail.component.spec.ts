import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmesDetailComponent } from './armes-detail.component';

describe('ArmesDetailComponent', () => {
  let component: ArmesDetailComponent;
  let fixture: ComponentFixture<ArmesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
