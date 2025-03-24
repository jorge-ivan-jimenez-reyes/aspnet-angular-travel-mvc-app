import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ViajesRoutingModule } from './viajes-routing.module';
import { ViajesComponent } from './components/viajes/viajes.component';
import { ViajeFormComponent } from './components/viaje-form/viaje-form.component';
import { ViajeListComponent } from './components/viaje-list/viaje-list.component';

@NgModule({
  declarations: [
    ViajesComponent,
    ViajeFormComponent,
    ViajeListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ViajesRoutingModule
  ]
})
export class ViajesModule { }
