import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuadro-alquilar',
  templateUrl: './cuadro-alquilar.component.html',
  styleUrls: ['./cuadro-alquilar.component.scss']
})
export class CuadroAlquilarComponent implements OnInit {

  miFormulario: FormGroup;
  errores = false;
  hoy: string;

  constructor(private router: Router) {
    this.miFormulario = new FormGroup({
      lugar: new FormControl('', Validators.required),
      recogida: new FormControl('', Validators.required),
      vuelta: new FormControl('', Validators.required)
    });
  }


  ngOnInit(): void {
    this.hoy = new Date().toISOString().slice(0, 10);
  }


  onSubmit() {
    if (this.miFormulario.invalid) {
      this.errores = true;
      return;
    }
    
    // Si el formulario es válido...
    this.errores = false;
    this.router.navigate(['coches']);
  }
  
}
