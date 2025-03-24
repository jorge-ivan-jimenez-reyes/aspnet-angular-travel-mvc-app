import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lugar } from '../modelos/lugar.model';
import { Transporte } from '../modelos/transporte.model';
import { EstatusViaje } from '../modelos/estatus-viaje.model';

@Injectable({ providedIn: 'root' })
export class CatalogoService {
  private baseUrl = 'http://localhost:5038/api';

  constructor(private http: HttpClient) {}

  getLugares(): Observable<Lugar[]> {
    return this.http.get<Lugar[]>(`${this.baseUrl}/lugares`);
  }

  getTransportes(): Observable<Transporte[]> {
    return this.http.get<Transporte[]>(`${this.baseUrl}/transportes`);
  }

  getEstatuses(): Observable<EstatusViaje[]> {
    return this.http.get<EstatusViaje[]>(`${this.baseUrl}/estatusviaje`);
  }
}
