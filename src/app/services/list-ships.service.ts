// list-ships.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { StarShipsResponse, StarShip, Film, Pilot } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ListShipsService {
    private nextPage: string | null = null;

    constructor(private http: HttpClient) {}

    getStarShips(page: number = 1): Observable<StarShipsResponse> {
        return this.http.get<StarShipsResponse>(`https://swapi.dev/api/starships/?page=${page}`)
        .pipe(
            tap(response => {
                this.nextPage = response.next;
                console.log("Recibido:", response);
            })
        );
    }

    hasNextPage(): boolean {
        return this.nextPage !== null;
    }

    getShipDetails(id: string): Observable<StarShip> {
        return this.http.get<StarShip>(`https://swapi.dev/api/starships/${id}/`);
    }

    getPilotDetails(url: string): Observable<Pilot> {
        return this.http.get<Pilot>(url)
        .pipe(
            catchError(error => {
                console.error("Error fetching pilot details:", error);
                return throwError(error);
            })
        );
    }

    getFilmDetails(filmUrl: string): Observable<Film> {
        return this.http.get<Film>(filmUrl);
    }

    getFilmImageUrl(filmId: number): string {
        return `https://starwars-visualguide.com/assets/img/films/${filmId}.jpg`;
    }
}
