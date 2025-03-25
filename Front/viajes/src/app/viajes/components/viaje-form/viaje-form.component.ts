import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Viaje } from '../../models/viaje.model';
import { Lugar } from '../../models/lugar.model';
import { EstatusViaje } from '../../models/estatus-viaje.model';
import { Transporte } from '../../models/transporte.model';
import { ViajeService } from '../../services/viaje.service';
import { CatalogoService } from '../../services/catalogo.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-viaje-form',
  templateUrl: './viaje-form.component.html',
  styleUrls: ['./viaje-form.component.scss'],
  providers: [MessageService]
})
export class ViajeFormComponent implements OnInit {
  viajeForm: FormGroup;
  isEditing: boolean = false;
  lugares: Lugar[] = [];
  estatusViajes: EstatusViaje[] = [];
  transportes: Transporte[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private viajeService: ViajeService,
    private catalogoService: CatalogoService,
    private messageService: MessageService
  ) {
    this.viajeForm = this.fb.group({
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      fechaHoraInicio: ['', Validators.required],
      fechaHoraFin: ['', Validators.required],
      operador: ['', Validators.required],
      presupuesto: ['', [Validators.required, Validators.min(0)]],
      lugarId: ['', Validators.required],
      transporteId: ['', Validators.required],
      estatusId: ['', Validators.required],
      descripcion: ['']
    });
  }

  navigateToViajes(): void {
    this.router.navigate(['/viajes']);
  }

  ngOnInit(): void {
    this.loadCatalogos();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.loadViaje(+id);
    }
  }

  loadCatalogos(): void {
    this.catalogoService.getLugares().subscribe(
      (lugares) => this.lugares = lugares,
      (error) => this.handleError('Error fetching lugares', error)
    );
    this.catalogoService.getEstatusViajes().subscribe(
      (estatusViajes) => this.estatusViajes = estatusViajes,
      (error) => this.handleError('Error fetching estatus viajes', error)
    );
    this.catalogoService.getTransportes().subscribe(
      (transportes) => this.transportes = transportes,
      (error) => this.handleError('Error fetching transportes', error)
    );
  }

  loadViaje(id: number): void {
    this.viajeService.getViajeById(id).subscribe(
      (viaje) => {
        this.viajeForm.patchValue(viaje);
      },
      (error) => this.handleError('Error fetching viaje', error)
    );
  }

  onSubmit(): void {
    if (this.viajeForm.valid) {
      const viaje: Viaje = this.viajeForm.value;
      if (this.isEditing) {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
          this.viajeService.updateViaje(+id, viaje).subscribe(
            () => this.handleSuccess('Viaje actualizado correctamente'),
            (error) => this.handleError('Error updating viaje', error)
          );
        }
      } else {
        this.viajeService.createViaje(viaje).subscribe(
          () => this.handleSuccess('Viaje creado correctamente'),
          (error) => this.handleError('Error creating viaje', error)
        );
      }
    }
  }

  private handleSuccess(message: string): void {
    this.messageService.add({severity:'success', summary: 'Éxito', detail: message});
    this.router.navigate(['/viajes']);
  }

  private handleError(message: string, error: any): void {
    console.error(message, error);
    this.messageService.add({severity:'error', summary: 'Error', detail: message});
  }
}
