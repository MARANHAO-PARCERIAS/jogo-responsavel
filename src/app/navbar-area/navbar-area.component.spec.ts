import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAreaComponent } from './navbar-area.component';

describe('NavbarAreaComponent', () => {
  let component: NavbarAreaComponent;
  let fixture: ComponentFixture<NavbarAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
