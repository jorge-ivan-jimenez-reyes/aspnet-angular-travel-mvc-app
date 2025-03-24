import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

import { ViajesRoutingModule } from './viajes-routing.module';
import { ViajesComponent } from './components/viajes/viajes.component';
import { ViajeListComponent } from './components/viaje-list/viaje-list.component';
import { ViajeFormComponent } from './components/viaje-form/viaje-form.component';

import { ViajeService } from './services/viaje.service';
import { CatalogoService } from './services/catalogo.service';

@NgModule({
  declarations: [
    ViajesComponent,
    ViajeListComponent,
    ViajeFormComponent
  ],
  imports: [
    CommonModule,
    ViajesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [
    ViajeService,
    CatalogoService
  ]
})
export class ViajesModule { }
