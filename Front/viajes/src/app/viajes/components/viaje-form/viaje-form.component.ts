import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Viaje } from '../../models/viaje.model';
import { Lugar } from '../../models/lugar.model';
import { EstatusViaje } from '../../models/estatus-viaje.model';
import { Transporte } from '../../models/transporte.model';
import { ViajeService } from '../../services/viaje.service';
import { CatalogoService } from '../../services/catalogo.service';

@Component({
  selector: 'app-viaje-form',
  templateUrl: './viaje-form.component.html',
  styleUrls: ['./viaje-form.component.scss']
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
    private catalogoService: CatalogoService
  ) {
    this.viajeForm = this.fb.group({
      destino: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      presupuesto: ['', [Validators.required, Validators.min(0)]],
      lugarId: ['', Validators.required],
      estatusId: ['', Validators.required],
      transporteId: ['', Validators.required]
    });
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
      (error) => console.error('Error fetching lugares:', error)
    );
    this.catalogoService.getEstatusViajes().subscribe(
      (estatusViajes) => this.estatusViajes = estatusViajes,
      (error) => console.error('Error fetching estatus viajes:', error)
    );
    this.catalogoService.getTransportes().subscribe(
      (transportes) => this.transportes = transportes,
      (error) => console.error('Error fetching transportes:', error)
    );
  }

  loadViaje(id: number): void {
    this.viajeService.getViajeById(id).subscribe(
      (viaje) => {
        this.viajeForm.patchValue(viaje);
      },
      (error) => console.error('Error fetching viaje:', error)
    );
  }

  onSubmit(): void {
    if (this.viajeForm.valid) {
      const viaje: Viaje = this.viajeForm.value;
      if (this.isEditing) {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
          this.viajeService.updateViaje(+id, viaje).subscribe(
            () => this.router.navigate(['/viajes']),
            (error) => console.error('Error updating viaje:', error)
          );
        }
      } else {
        this.viajeService.createViaje(viaje).subscribe(
          () => this.router.navigate(['/viajes']),
          (error) => console.error('Error creating viaje:', error)
        );
      }
    }
  }
}
