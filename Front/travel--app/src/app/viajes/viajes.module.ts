import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViajesRoutingModule } from './viajes-routing.module';
import { ViajesComponent } from './componentes/viajes.component';

@NgModule({
  declarations: [ViajesComponent],
  imports: [
    CommonModule,
    ViajesRoutingModule
  ]
})
export class ViajesModule { }
