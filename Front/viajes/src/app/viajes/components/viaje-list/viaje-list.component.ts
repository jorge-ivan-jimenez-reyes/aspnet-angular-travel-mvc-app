import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from '../../models/viaje.model';
import { ViajeService } from '../../services/viaje.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { CatalogoService } from '../../services/catalogo.service';

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
  }

  loadViajes(): void {
    this.loading = true;
    this.viajeService.getViajes().subscribe(
      (viajes) => {
        this.viajes = viajes;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching viajes:', error);
        this.messageService.add({severity:'error', summary: 'Error', detail: 'No se pudieron cargar los viajes'});
        this.loading = false;
      }
    );
  }

  loadEstatusNombres(): void {
    this.catalogoService.getEstatusViajes().subscribe(
      (estatusViajes) => {
        estatusViajes.forEach(estatus => {
          this.estatusNombres[estatus.id] = estatus.nombre;
        });
      },
      (error) => {
        console.error('Error fetching estatus viajes:', error);
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
    this.confirmationService.confirm({
      message: `¿Estás seguro de que quieres eliminar el viaje a ${viaje.destino || 'destino desconocido'}?`,
      header: 'Confirmar eliminación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.viajeService.deleteViaje(viaje.id!).subscribe(
          () => {
            this.loadViajes(); // Reload the list after deletion
            this.messageService.add({severity:'success', summary: 'Éxito', detail: 'Viaje eliminado correctamente'});
          },
          (error) => {
            console.error('Error deleting viaje:', error);
            this.messageService.add({severity:'error', summary: 'Error', detail: 'No se pudo eliminar el viaje'});
          }
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
}
