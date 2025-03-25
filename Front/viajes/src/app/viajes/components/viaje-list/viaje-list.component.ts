import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from '../../models/viaje.model';
import { ViajeService } from '../../services/viaje.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { CatalogoService } from '../../services/catalogo.service';
import { Lugar } from '../../models/lugar.model';

@Component({
  selector: 'app-viaje-list',
  templateUrl: './viaje-list.component.html',
  styleUrls: ['./viaje-list.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class ViajeListComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;

  viajes: Viaje[] = [];
  loading: boolean = true;
  estatusNombres: { [key: number]: string } = {};
  estatusOptions: any[] = [];
  lugares: { [key: number]: Lugar } = {};

  constructor(
    private router: Router,
    private viajeService: ViajeService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private catalogoService: CatalogoService
  ) {}

  ngOnInit(): void {
    this.loadViajes();
    this.loadEstatusNombres();
    this.loadLugares();
  }

  loadViajes(): void {
    this.loading = true;
    this.viajeService.getViajes().subscribe({
      next: (viajes) => {
        this.viajes = viajes;
        this.loading = false;
      },
      error: (error) => {
        this.handleError('Error fetching viajes', error);
        this.loading = false;
      }
    });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  loadEstatusNombres(): void {
    this.catalogoService.getEstatusViajes().subscribe(
      (estatusViajes) => {
        estatusViajes.forEach(estatus => {
          this.estatusNombres[estatus.id] = estatus.nombre;
          this.estatusOptions.push({ label: estatus.nombre, value: estatus.id });
        });
      },
      (error) => this.handleError('Error fetching estatus viajes', error)
    );
  }

  loadLugares(): void {
    this.catalogoService.getLugares().subscribe({
      next: (lugares) => {
        lugares.forEach(lugar => {
          this.lugares[lugar.id] = lugar;
        });
      },
      error: (error) => {
        console.error('Error in loadLugares:', error);
        if (error.error instanceof ErrorEvent) {
          // Client-side or network error
          this.handleError('Error fetching lugares: ' + error.error.message, error);
        } else {
          // Backend error
          this.handleError(`Error fetching lugares: ${error.status} ${error.statusText}`, error);
        }
      }
    });
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
    this.confirmationService.confirm({
      message: `¿Estás seguro de que quieres eliminar el viaje "${viaje.nombre || 'Sin nombre'}" de ${this.getLugarNombre(viaje.origenId)} a ${this.getLugarNombre(viaje.destinoId)}?`,
      header: 'Confirmar eliminación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.viajeService.deleteViaje(viaje.id!).subscribe(
          () => {
            this.loadViajes(); // Reload the list after deletion
            this.messageService.add({severity:'success', summary: 'Éxito', detail: 'Viaje eliminado correctamente'});
          },
          (error) => this.handleError('Error deleting viaje', error)
        );
      }
    });
  }

  clear(table: Table) {
    table.clear();
  }

  getEstatusNombre(estatusId: number): string {
    return this.estatusNombres[estatusId] || 'Desconocido';
  }

  getLugarNombre(lugarId: number): string {
    return this.lugares[lugarId]?.nombre || 'Desconocido';
  }

  getEstatusColor(estatusId: number): 'success' | 'info' | 'warn' | 'danger' {
    const estatus = this.getEstatusNombre(estatusId).toLowerCase();
    switch (estatus) {
      case 'pendiente':
        return 'warn';
      case 'en progreso':
        return 'info';
      case 'completado':
        return 'success';
      case 'cancelado':
        return 'danger';
      default:
        return 'info';
    }
  }

  private handleError(message: string, error: any): void {
    console.error(message, error);
    let errorDetail = message;
    if (error.error && typeof error.error === 'string') {
      errorDetail += ' ' + error.error;
    }
    this.messageService.add({severity:'error', summary: 'Error', detail: errorDetail});
    this.loading = false;
  }
}
