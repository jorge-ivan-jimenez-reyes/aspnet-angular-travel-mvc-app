import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ViajeService } from '../servicios/viaje.service';
import { CatalogoService } from '../servicios/catalogo.service';
import { Viaje } from '../modelos/viaje.model';
import { Lugar } from '../modelos/lugar.model';
import { Transporte } from '../modelos/transporte.model';
import { EstatusViaje } from '../modelos/estatus-viaje.model';

@Component({
  selector: 'app-viajes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit {
  viajes: Viaje[] = [];
  lugares: Lugar[] = [];
  transportes: Transporte[] = [];
  estatuses: EstatusViaje[] = [];

  viajeForm!: FormGroup;
  modoEdicion: boolean = false;
  viajeEditandoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private viajeService: ViajeService,
    private catalogoService: CatalogoService
  ) {}

  ngOnInit(): void {
    this.cargarCatalogos();
    this.cargarViajes();
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.viajeForm = this.fb.group({
      nombre: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      origenId: [null, Validators.required],
      destinoId: [null, Validators.required],
      transporteId: [null, Validators.required],
      estatusId: [null, Validators.required],
      costo: [null, Validators.required],
      descripcion: ['']
    });
  }

  cargarCatalogos() {
    this.catalogoService.getLugares().subscribe(data => this.lugares = data);
    this.catalogoService.getTransportes().subscribe(data => this.transportes = data);
    this.catalogoService.getEstatuses().subscribe(data => this.estatuses = data);
  }

  cargarViajes() {
    this.viajeService.getViajes().subscribe(data => this.viajes = data);
  }

  guardarViaje() {
    if (this.viajeForm.invalid) return;

    const viaje: Viaje = this.viajeForm.value;

    if (this.modoEdicion && this.viajeEditandoId !== null) {
      this.viajeService.updateViaje(this.viajeEditandoId, viaje).subscribe(() => {
        this.cancelar();
        this.cargarViajes();
      });
    } else {
      this.viajeService.createViaje(viaje).subscribe(() => {
        this.viajeForm.reset();
        this.cargarViajes();
      });
    }
  }

  editarViaje(viaje: Viaje) {
    this.viajeForm.patchValue(viaje);
    this.modoEdicion = true;
    this.viajeEditandoId = viaje.id;
  }

  cancelar() {
    this.viajeForm.reset();
    this.modoEdicion = false;
    this.viajeEditandoId = null;
  }

  eliminarViaje(id: number) {
    if (confirm('¿Estás seguro de eliminar este viaje?')) {
      this.viajeService.deleteViaje(id).subscribe(() => {
        this.cargarViajes();
      });
    }
  }
}
