import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListShipsService } from '../../../services/list-ships.service';  // Asegúrate de importar desde la ubicación correcta
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  shipDetails: any;
  shipId: string = '';
  shipImageUrl: string = '';
  pilotsDetails: any[] = [];
  loading: boolean = true;
  constructor(
    private listShipsService: ListShipsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loading = true;  // inicia el estado de carga
    
    this.shipId = this.route.snapshot.paramMap.get('id')!;
    this.listShipsService.getShipDetails(this.shipId).subscribe(details => {
      this.shipDetails = details;
      this.shipImageUrl = `https://starwars-visualguide.com/assets/img/starships/${this.shipId}.jpg`;
  
      // Si hay pilotos asociados a la nave, se realizan las llamadas simultáneas
      if (this.shipDetails.pilots.length) {
        const pilotObservables = this.shipDetails.pilots.map((pilotUrl: string) => this.listShipsService.getPilotDetails(pilotUrl));
  
        forkJoin(pilotObservables).subscribe(pilots => {
          this.pilotsDetails = pilots as any[]; // Añadimos un casting aquí
          this.loading = false;  // finaliza el estado de carga
        });
      } else {
        this.loading = false;  // finaliza el estado de carga si no hay pilotos
      }
    });
  }
  
  
  getPilotId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }
  
}
