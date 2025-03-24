import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViajesRoutingModule } from './viajes-routing.module';
import { ViajesComponent } from './componentes/viajes.component';
import { ViajeService } from './servicios/viaje.service';
import { CatalogoService } from './servicios/catalogo.service';

@NgModule({
  declarations: [ViajesComponent],
  imports: [
    CommonModule,
    ViajesRoutingModule
  ],
  providers: [ViajeService, CatalogoService]
})
export class ViajesModule { }
