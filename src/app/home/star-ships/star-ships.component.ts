import { Component, OnInit } from '@angular/core';
import { ListShipsService } from '../../services/list-ships.service';
import { StarShip, StarShipsResponse } from "../../interfaces/interfaces";

@Component({
  selector: 'app-star-ships',
  templateUrl: './star-ships.component.html',
  styleUrls: ['./star-ships.component.css']
})

export class StarShipsComponent implements OnInit {

  starShips: StarShip[] = [];
  currentPage: number = 1;
  isLoading: boolean = false;

  constructor(public listShipsService: ListShipsService) { }

  ngOnInit(): void {

    this.fetchStarShips();
  }

  fetchStarShips(): void {
    this.listShipsService.getStarShips().subscribe({
      next: (data: StarShipsResponse) => {
        this.starShips = data.results;
        this.currentPage++;  // Incrementa aquí también para que cuando llames a loadMore, obtengas la página correcta.
      },
      error: error => {
        console.error("Error fetching starships:", error);
      }
    });
}

  getShipId(ship: StarShip): string {
    const parts = ship.url.split('/');
    return parts[parts.length - 2];
  }

  loadMore() {
    this.isLoading = true;

    this.listShipsService.getStarShips(this.currentPage).subscribe({
      next: (response: StarShipsResponse) => {
        this.starShips = [...this.starShips, ...response.results];
        this.currentPage++;  // Asegúrate de incrementar currentPage aquí para solicitar la página correcta la próxima vez.
        this.isLoading = false;
      },
      error: error => {
        console.error("Error fetching more starships:", error);
        this.isLoading = false;
      }
    });
}


}
