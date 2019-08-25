import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModsDetailComponent } from './mods-detail.component';

describe('ModsDetailComponent', () => {
  let component: ModsDetailComponent;
  let fixture: ComponentFixture<ModsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
