import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from '../../models/viaje.model';
import { ViajeService } from '../../services/viaje.service';

@Component({
  selector: 'app-viaje-list',
  templateUrl: './viaje-list.component.html',
  styleUrls: ['./viaje-list.component.scss']
})
export class ViajeListComponent implements OnInit {
  viajes: Viaje[] = [];

  constructor(private router: Router, private viajeService: ViajeService) {}

  ngOnInit(): void {
    this.loadViajes();
  }

  loadViajes(): void {
    this.viajeService.getViajes().subscribe(
      (viajes) => {
        this.viajes = viajes;
      },
      (error) => {
        console.error('Error fetching viajes:', error);
        // TODO: Add error handling (e.g., show error message to user)
      }
    );
  }

  onNewViaje(): void {
    this.router.navigate(['/viajes/new']);
  }

  onEditViaje(viaje: Viaje): void {
    this.router.navigate(['/viajes/edit', viaje.id]);
  }

  onDeleteViaje(viaje: Viaje): void {
    if (viaje.id === undefined) {
      console.error('Cannot delete viaje: id is undefined');
      return;
    }
    if (confirm(`Are you sure you want to delete the viaje to ${viaje.destino}?`)) {
      this.viajeService.deleteViaje(viaje.id).subscribe(
        () => {
          this.loadViajes(); // Reload the list after deletion
        },
        (error) => {
          console.error('Error deleting viaje:', error);
          // TODO: Add error handling (e.g., show error message to user)
        }
      );
    }
  }
}
