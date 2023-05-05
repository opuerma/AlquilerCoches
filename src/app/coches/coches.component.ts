import { Component, OnInit } from '@angular/core';
import { Coche } from '../Coche';
import { CochesService } from '../coches.service';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.scss']
})
export class CochesComponent implements OnInit {
 
  coches: Coche[] = [];

  constructor(public serviceCoches: CochesService) {
    this.coches = this.serviceCoches.getCoches();
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
