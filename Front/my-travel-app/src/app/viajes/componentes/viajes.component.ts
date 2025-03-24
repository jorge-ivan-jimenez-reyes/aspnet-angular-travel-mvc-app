import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Viaje } from '../modelos/viaje.model';
import { Lugar } from '../modelos/lugar.model';
import { Transporte } from '../modelos/transporte.model';
import { EstatusViaje } from '../modelos/estatus-viaje.model';
import { ViajeService } from '../servicios/viaje.service';
import { CatalogoService } from '../servicios/catalogo.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-viajes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: 'viajes.component.html',
  styleUrls: ['viajes.component.scss']
})
export class ViajesComponent implements OnInit {
  viajes: Viaje[] = [];
  lugares: Lugar[] = [];
  transportes: Transporte[] = [];
  estatuses: EstatusViaje[] = [];

  form!: FormGroup;
  modoEditar: boolean = false;

  constructor(
    private viajeService: ViajeService,
    private catalogoService: CatalogoService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.cargarDatos();
    this.form = this.fb.group({
      id: [0],
      nombre: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      origenId: [null, Validators.required],
      destinoId: [null, Validators.required],
      transporteId: [null, Validators.required],
      estatusId: [null, Validators.required],
      costo: [0, Validators.required],
      descripcion: ['']
    });
  }

  cargarDatos(): void {
    this.viajeService.getViajes().subscribe(v => this.viajes = v);
    this.catalogoService.getLugares().subscribe(l => this.lugares = l);
    this.catalogoService.getTransportes().subscribe(t => this.transportes = t);
    this.catalogoService.getEstatuses().subscribe(e => this.estatuses = e);
  }

  guardar(): void {
    const viaje = this.form.value as Viaje;
    if (this.modoEditar) {
      this.viajeService.updateViaje(viaje.id, viaje).subscribe(() => {
        this.resetFormulario();
        this.cargarDatos();
      });
    } else {
      this.viajeService.createViaje(viaje).subscribe(() => {
        this.resetFormulario();
        this.cargarDatos();
      });
    }
  }

  editar(viaje: Viaje): void {
    this.modoEditar = true;
    this.form.patchValue(viaje);
  }

  eliminar(id: number): void {
    if (confirm('¿Eliminar este viaje?')) {
      this.viajeService.deleteViaje(id).subscribe(() => {
        this.cargarDatos();
      });
    }
  }

  getNombreLugar(id: number): string {
    const lugar = this.lugares.find(l => l.id === id);
    return lugar ? lugar.nombre : '';
  }

  resetFormulario(): void {
    this.form.reset();
    this.modoEditar = false;
  }




}
