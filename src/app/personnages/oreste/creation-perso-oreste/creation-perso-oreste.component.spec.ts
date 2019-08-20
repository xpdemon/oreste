import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationPersoOresteComponent } from './creation-perso-oreste.component';

describe('CreationPersoOresteComponent', () => {
  let component: CreationPersoOresteComponent;
  let fixture: ComponentFixture<CreationPersoOresteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationPersoOresteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationPersoOresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
