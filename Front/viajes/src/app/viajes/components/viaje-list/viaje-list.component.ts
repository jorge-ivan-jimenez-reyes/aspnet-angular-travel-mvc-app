import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from '../../models/viaje.model';
import { ViajeService } from '../../services/viaje.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-viaje-list',
  templateUrl: './viaje-list.component.html',
  styleUrls: ['./viaje-list.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class ViajeListComponent implements OnInit {
  viajes: Viaje[] = [];

  constructor(
    private router: Router,
    private viajeService: ViajeService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

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
        this.messageService.add({severity:'error', summary: 'Error', detail: 'No se pudieron cargar los viajes'});
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
      message: `¿Estás seguro de que quieres eliminar el viaje a ${viaje.destino}?`,
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
}
