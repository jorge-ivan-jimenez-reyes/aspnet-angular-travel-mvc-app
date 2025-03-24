import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Viaje } from '../modelos/viaje.model';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {
  private viajes: Viaje[] = [];

  constructor() { }

  getViajes(): Observable<Viaje[]> {
    return of(this.viajes);
  }

  addViaje(viaje: Viaje): Observable<Viaje> {
    this.viajes.push(viaje);
    return of(viaje);
  }

  // Aquí se pueden agregar más métodos según sea necesario
}
