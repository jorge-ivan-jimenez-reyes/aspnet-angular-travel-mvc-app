import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { Viaje } from '../../modelos/viaje.model';
import { Lugar } from '../../modelos/lugar.model';
import { Transporte } from '../../modelos/transporte.model';
import { EstatusViaje } from '../../modelos/estatus-viaje.model';

@Component({
  selector: 'app-viaje-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  templateUrl: './viaje-form.component.html',
  styleUrl: './viaje-form.component.scss'
})
export class ViajeFormComponent implements OnInit {
  @Input() viaje: Viaje | null = null;
  @Input() lugares: Lugar[] = [];
  @Input() transportes: Transporte[] = [];
  @Input() estatuses: EstatusViaje[] = [];
  @Output() save = new EventEmitter<Viaje>();
  @Output() cancel = new EventEmitter<void>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      id: [this.viaje?.id || 0],
      nombre: [this.viaje?.nombre || '', Validators.required],
      fechaInicio: [this.viaje?.fechaInicio || '', Validators.required],
      fechaFin: [this.viaje?.fechaFin || '', Validators.required],
      origenId: [this.viaje?.origenId || null, Validators.required],
      destinoId: [this.viaje?.destinoId || null, Validators.required],
      transporteId: [this.viaje?.transporteId || null, Validators.required],
      estatusId: [this.viaje?.estatusId || null, Validators.required],
      costo: [this.viaje?.costo || 0, Validators.required],
      descripcion: [this.viaje?.descripcion || '']
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
