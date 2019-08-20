import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnageOresteDetailComponent } from './personnage-oreste-detail.component';

describe('PersonnageOresteDetailComponent', () => {
  let component: PersonnageOresteDetailComponent;
  let fixture: ComponentFixture<PersonnageOresteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnageOresteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnageOresteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
