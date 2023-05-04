import { Component } from '@angular/core';
import { Coche } from 'src/app/Coche';
import { CochesService } from 'src/app/coches.service';

@Component({
  selector: 'app-cartas-coches',
  templateUrl: './cartas-coches.component.html',
  styleUrls: ['./cartas-coches.component.scss']
})
export class CartasCochesComponent {
  
  coches: Coche[] = [];

  constructor(public serviceCoches: CochesService) {
    this.coches = this.serviceCoches.getCoches();
  }

}
