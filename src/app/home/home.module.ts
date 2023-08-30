import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { StarShipsComponent } from './star-ships/star-ships.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './star-ships/detail/detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    StarShipsComponent,
    HomeComponent,
    DetailComponent,
  ],
  exports: [
    HomeComponent 
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
