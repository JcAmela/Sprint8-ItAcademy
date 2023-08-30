import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StarShipsResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ListShipsService {

  private nextPage: string | null = null;  // Para mantener el control de la siguiente página

  constructor(private http: HttpClient) {}

  getStarShips(page: number = 1): Observable<StarShipsResponse> {
    return this.http.get<StarShipsResponse>(`https://swapi.dev/api/starships/?page=${page}`)
    .pipe(
      tap(response => {
        this.nextPage = response.next;  // Actualizamos nextPage
        console.log("Recibido:", response);
      })
    );
  }

  hasNextPage(): boolean {
    return this.nextPage !== null;  // Si hay una próxima página, devuelve true
  }

  getShipDetails(id: string): Observable<any> {
    return this.http.get(`https://swapi.dev/api/starships/${id}/`);
  }
  
  getPilotDetails(url: string): Observable<any> {
    return this.http.get(url);
}

}
