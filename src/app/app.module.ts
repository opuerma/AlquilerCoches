import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CuadroAlquilarComponent } from './home/cuadro-alquilar/cuadro-alquilar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeccionEficienciaComponent } from './home/seccion-eficiencia/seccion-eficiencia.component';
import { PuntosDestacadosComponent } from './home/puntos-destacados/puntos-destacados.component';
import { FaqComponent } from './home/faq/faq.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CochesComponent } from './coches/coches.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CartasCochesComponent } from './home/cartas-coches/cartas-coches.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    CuadroAlquilarComponent,
    SeccionEficienciaComponent,
    PuntosDestacadosComponent,
    FaqComponent,
    HomeComponent,
    NosotrosComponent,
    CochesComponent,
    ContactoComponent,
    CartasCochesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
