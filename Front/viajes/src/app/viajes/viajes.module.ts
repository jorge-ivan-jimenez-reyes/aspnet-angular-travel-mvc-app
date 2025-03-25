import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

import { ViajesRoutingModule } from './viajes-routing.module';
import { ViajesComponent } from './components/viajes/viajes.component';
import { ViajeListComponent } from './components/viaje-list/viaje-list.component';
import { ViajeFormComponent } from './components/viaje-form/viaje-form.component';

import { ViajeService } from './services/viaje.service';
import { CatalogoService } from './services/catalogo.service';
import { MessageService } from 'primeng/api';

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
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule,
    DropdownModule,
    ToastModule,
    ConfirmDialogModule,
    ToolbarModule,
    CardModule,
    TagModule,
    TooltipModule
  ],
  providers: [
    ViajeService,
    CatalogoService,
    MessageService
  ]
})
export class ViajesModule { }
