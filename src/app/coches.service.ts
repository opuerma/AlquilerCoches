import { Injectable } from '@angular/core';
import { Coche } from './Coche';

@Injectable({
  providedIn: 'root'
})
export class CochesService {

  private coches: Coche[] = [];
  private coche1: Coche;
  private coche2: Coche;
  private coche3: Coche;
  private coche4: Coche;
  private coche5: Coche;
  private coche6: Coche;

  constructor() {
    this.coche1 = {
      marca: "Peugeot",
      modelo: "e-208",
      autonomia: 398,
      puertas: 5,
      cajaCambios: false,
      precio: Math.round(33226 / 1000),
      descripcion: "Un utilitario equilibrado, de respuesta alegre gracias a sus 136 caballos y alcance suficiente para afrontar viajes, gracias a sus 362 km de autonomía homologada. En su interior destaca la instrumentación digital i-cockpit."
    };

    this.coche2 = {
      marca: "KIA",
      modelo: "e-Niro",
      autonomia: 460,
      puertas: 5,
      cajaCambios: false,
      precio: Math.round(40152 / 1000),
      descripcion: "Un SUV eléctrico mediano, bien diseñado en prácticamente todo: es cómodo, eficaz en carretera como un buen turismo y su consumo permite una autonomía razonable."
    };

    this.coche3 = {
      marca: "MINI",
      modelo: "Cooper SE",
      autonomia: 233,
      puertas: 3,
      cajaCambios: false,
      precio: Math.round(34976 / 1000),
      descripcion: "El MINI Cooper SE es la versión eléctrica de tres puertas con etiqueta CERO, que a pesar de tener un precio relativamente alto para su autonomía, ofrece una conducción divertida."
    };

    this.coche4 = {
      marca: "Tesla",
      modelo: "Model 3",
      autonomia: 626,
      puertas: 4,
      cajaCambios: false,
      precio: Math.round(40970 / 1000),
      descripcion: "El Tesla Model 3 es un coche eléctrico de 4,69 metros de largo con cinco puertas y capacidad para cinco pasajeros. En general, destaca principalmente por su autonomía y por sus elevadas prestaciones."
    };

    this.coche5 = {
      marca: "Hyundai",
      modelo: "Ioniq 5",
      autonomia: 507,
      puertas: 5,
      cajaCambios: false,
      precio: Math.round(45754 / 1000),
      descripcion: "Es un SUV eléctrico de tamaño mediano que destaca por la gran amplitud que ofrece. Mide algo más de 4,63 metros de largo, 1,89 m de ancho y 1,60 m de alto. El dato más destacable es su distancia entre ejes, de 3 metros."
    };

    this.coche6 = {
      marca: "KIA",
      modelo: "EV6",
      autonomia: 528,
      puertas: 5,
      cajaCambios: false,
      precio: Math.round(46723 / 1000),
      descripcion: "Con 4,6 metros de longitud, estamos ante un coche de tamaño mediano “tirando” a grande. Tiene una carrocería a medio camino entre un compacto y un SUV... es un crossover con 16 cm de altura libre al suelo."
    };

    this.coches.push(this.coche1, this.coche2, this.coche3, this.coche4, this.coche5, this.coche6);
  }


  getCoches(): Coche[] {
    return this.coches;
  }

  cajaCambios(esManual: boolean): string {
    if (esManual) return "Manual";
    return "Automático";
  }


}
