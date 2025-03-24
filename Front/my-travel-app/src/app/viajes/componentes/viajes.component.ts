import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { Viaje } from '../modelos/viaje.model';
import { Lugar } from '../modelos/lugar.model';
import { Transporte } from '../modelos/transporte.model';
import { EstatusViaje } from '../modelos/estatus-viaje.model';
import { ViajeService } from '../servicios/viaje.service';
import { CatalogoService } from '../servicios/catalogo.service';
import { ViajeFormComponent } from './viaje-form/viaje-form.component';

@Component({
  selector: 'app-viajes',
  templateUrl: 'viajes.component.html',
  styleUrls: ['./viajes.component.scss']
})
export class ViajesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id', 'nombre', 'fechaInicio', 'fechaFin', 'origen', 'destino', 'transporte', 'estatus', 'costo', 'acciones'];
  dataSource!: MatTableDataSource<Viaje>;
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
    this.initForm();
    this.cargarDatos();
  }

  initForm(): void {
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
    this.viajeService.getViajes().subscribe(viajes => {
      this.viajes = viajes;
      this.dataSource = new MatTableDataSource(this.viajes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.catalogoService.getLugares().subscribe(l => this.lugares = l);
    this.catalogoService.getTransportes().subscribe(t => this.transportes = t);
    this.catalogoService.getEstatuses().subscribe(e => this.estatuses = e);
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  guardar(): void {
    if (this.form.invalid) {
      return;
    }
    const viaje: Viaje = this.form.value;
    if (this.modoEditar) {
      this.viajeService.updateViaje(viaje.id, viaje).subscribe(() => {
        this.resetFormulario();
        this.cargarDatos();
        this.actualizarTabla();
      });
    } else {
      this.viajeService.createViaje(viaje).subscribe(() => {
        this.resetFormulario();
        this.cargarDatos();
        this.actualizarTabla();
      });
    }
  }

  actualizarTabla(): void {
    if (this.dataSource) {
      this.dataSource.data = this.viajes;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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
        this.actualizarTabla();
      });
    }
  }

  getNombreLugar(id: number): string {
    const lugar = this.lugares.find(l => l.id === id);
    return lugar ? lugar.nombre : '';
  }

  getNombreTransporte(id: number): string {
    const transporte = this.transportes.find(t => t.id === id);
    return transporte ? transporte.nombre : '';
  }

  getNombreEstatus(id: number): string {
    const estatus = this.estatuses.find(e => e.id === id);
    return estatus ? estatus.nombre : '';
  }

  resetFormulario(): void {
    this.form.reset();
    this.modoEditar = false;
  }
}
