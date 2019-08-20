import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnageOresteComponent } from './personnage-oreste.component';

describe('PersonnageOresteComponent', () => {
  let component: PersonnageOresteComponent;
  let fixture: ComponentFixture<PersonnageOresteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnageOresteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnageOresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
