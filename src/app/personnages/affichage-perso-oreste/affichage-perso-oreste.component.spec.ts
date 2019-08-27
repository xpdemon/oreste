import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichagePersoOresteComponent } from './affichage-perso-oreste.component';

describe('AffichagePersoOresteComponent', () => {
  let component: AffichagePersoOresteComponent;
  let fixture: ComponentFixture<AffichagePersoOresteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichagePersoOresteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichagePersoOresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
