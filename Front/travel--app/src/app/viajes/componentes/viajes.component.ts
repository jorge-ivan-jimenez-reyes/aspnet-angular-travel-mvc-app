import { Component, OnInit } from '@angular/core';
import { ViajeService } from '../servicios/viaje.service';
import { CatalogoService } from '../servicios/catalogo.service';
import { Viaje } from '../modelos/viaje.model';
import { Lugar } from '../modelos/lugar.model';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss']
})
export class ViajesComponent implements OnInit {
  viajes: Viaje[] = [];
  lugares: Lugar[] = [];

  constructor(
    private viajeService: ViajeService,
    private catalogoService: CatalogoService
  ) {}

  ngOnInit(): void {
    this.cargarViajes();
    this.cargarLugares();
  }

  cargarViajes(): void {
    this.viajeService.getViajes().subscribe(
      viajes => this.viajes = viajes
    );
  }

  cargarLugares(): void {
    this.catalogoService.getLugares().subscribe(
      lugares => this.lugares = lugares
    );
  }
}
