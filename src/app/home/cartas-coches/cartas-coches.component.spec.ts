import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartasCochesComponent } from './cartas-coches.component';

describe('CartasCochesComponent', () => {
  let component: CartasCochesComponent;
  let fixture: ComponentFixture<CartasCochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartasCochesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartasCochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
