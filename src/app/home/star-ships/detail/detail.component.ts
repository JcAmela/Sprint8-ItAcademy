// detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListShipsService } from '../../../services/list-ships.service';
import { forkJoin } from 'rxjs';
import { StarShip, Film, Pilot } from './../../../interfaces/interfaces';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  shipDetails: StarShip = {} as StarShip;
  shipId: string = '';
  shipImageUrl: string = '';
  pilotsDetails: Pilot[] = [];
  filmDetails: Film[] = [];
  filmImageUrls: string[] = [];
  loading: boolean = true;
  showImageError: boolean = false;

  constructor(
    private listShipsService: ListShipsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loading = true;

    this.shipId = this.route.snapshot.paramMap.get('id')!;
    this.listShipsService.getShipDetails(this.shipId).subscribe(details => {
      this.shipDetails = details;
      this.shipImageUrl = `https://starwars-visualguide.com/assets/img/starships/${this.shipId}.jpg`;

      if (this.shipDetails.pilots.length) {
        const pilotObservables = this.shipDetails.pilots.map((pilotUrl: string) => this.listShipsService.getPilotDetails(pilotUrl));
        forkJoin(pilotObservables).subscribe(pilots => {
          this.pilotsDetails = pilots as any[];
          this.loading = false;
        });
      } else {
        this.loading = false;
      }

      if (this.shipDetails.films.length) {
        const filmObservables = this.shipDetails.films.map((filmUrl: string) => this.listShipsService.getFilmDetails(filmUrl));
        forkJoin(filmObservables).subscribe(films => {
          this.filmDetails = films;
          
          this.filmImageUrls = films.map(film => this.listShipsService.getFilmImageUrl(film.episode_id));
        });
      }




    });
  }

  getPilotId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }

  imageError(event: any): void {
    event.target.style.display = 'none';
    this.showImageError = true;
  }

  getImageUrl(url: string): string {
    return 'https://starwars-visualguide.com/assets/img/characters/' + this.getPilotId(url) + '.jpg';
  }
}
