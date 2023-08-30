import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './star-ships/detail/detail.component';
import { HomeComponent } from './home.component';
import { StarShipsComponent } from './star-ships/star-ships.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'starships', component: StarShipsComponent },
  { path: 'starships/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
