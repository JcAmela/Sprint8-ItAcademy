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

  constructor(public listShipsService: ListShipsService) {}

  ngOnInit(): void {
    this.fetchStarShips();
  }

  fetchStarShips(): void {
    this.listShipsService.getStarShips().subscribe({
      next: (data: StarShipsResponse) => {
        this.starShips = data.results;
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
  this.currentPage++;
  this.listShipsService.getStarShips(this.currentPage).subscribe(response => {
    this.starShips = [...this.starShips, ...response.results];
  });
}

}
