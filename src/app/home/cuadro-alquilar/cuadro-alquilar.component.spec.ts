import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroAlquilarComponent } from './cuadro-alquilar.component';

describe('CuadroAlquilarComponent', () => {
  let component: CuadroAlquilarComponent;
  let fixture: ComponentFixture<CuadroAlquilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroAlquilarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadroAlquilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
