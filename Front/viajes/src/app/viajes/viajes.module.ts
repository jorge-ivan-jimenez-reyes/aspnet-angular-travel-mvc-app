import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToolbarModule } from 'primeng/toolbar';

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
    TableModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule,
    DropdownModule,
    ToastModule,
    ConfirmDialogModule,
    ToolbarModule
  ],
  providers: [
    ViajeService,
    CatalogoService
  ]
})
export class ViajesModule { }
