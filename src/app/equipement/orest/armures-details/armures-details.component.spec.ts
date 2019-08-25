import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmuresDetailsComponent } from './armures-details.component';

describe('ArmuresDetailsComponent', () => {
  let component: ArmuresDetailsComponent;
  let fixture: ComponentFixture<ArmuresDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmuresDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmuresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
