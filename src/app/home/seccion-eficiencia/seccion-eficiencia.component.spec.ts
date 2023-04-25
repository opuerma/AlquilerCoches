import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionEficienciaComponent } from './seccion-eficiencia.component';

describe('SeccionEficienciaComponent', () => {
  let component: SeccionEficienciaComponent;
  let fixture: ComponentFixture<SeccionEficienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionEficienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionEficienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
