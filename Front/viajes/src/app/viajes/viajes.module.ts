import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule
  ],
  providers: [
    ViajeService,
    CatalogoService
  ]
})
export class ViajesModule { }
