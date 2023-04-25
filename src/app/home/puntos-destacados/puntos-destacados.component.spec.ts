import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosDestacadosComponent } from './puntos-destacados.component';

describe('PuntosDestacadosComponent', () => {
  let component: PuntosDestacadosComponent;
  let fixture: ComponentFixture<PuntosDestacadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntosDestacadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuntosDestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
