import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './home/star-ships/detail/detail.component';
import { HomeComponent } from './home/home.component';
import { StarShipsComponent } from './home/star-ships/star-ships.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'starships', component: StarShipsComponent },
  { path: 'starships/:id', component: DetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
