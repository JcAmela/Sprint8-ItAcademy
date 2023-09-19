// Imports de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Imports de componentes
import { HomeComponent } from './home.component';
import { StarShipsComponent } from './star-ships/star-ships.component';
import { DetailComponent } from './star-ships/detail/detail.component';

// Imports de routing
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  // Declaraciones: Componentes, directivas y pipes que pertenecen a este módulo
  declarations: [
    HomeComponent,
    StarShipsComponent,
    DetailComponent,
  ],
  

  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,         
    HomeRoutingModule
  ],

  exports: [
    HomeComponent 
  ],


  providers: [],

})

export class HomeModule { }
