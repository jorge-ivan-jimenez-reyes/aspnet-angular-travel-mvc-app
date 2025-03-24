import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lugar } from '../modelos/lugar.model';
import { TipoTransporte } from '../modelos/transporte.model';
import { EstatusViaje } from '../modelos/estatus-viaje.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  constructor() { }

  getLugares(): Observable<Lugar[]> {
    // Aquí se podría implementar una llamada a un API real
    return of([
      { id: 1, nombre: 'París', pais: 'Francia', ciudad: 'París' },
      { id: 2, nombre: 'Roma', pais: 'Italia', ciudad: 'Roma' },
      // Agregar más lugares según sea necesario
    ]);
  }

  getTiposTransporte(): Observable<TipoTransporte[]> {
    return of(Object.values(TipoTransporte));
  }

  getEstatusViaje(): Observable<EstatusViaje[]> {
    return of(Object.values(EstatusViaje));
  }
}
