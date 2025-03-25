import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError } from 'rxjs';
import { Lugar } from '../models/lugar.model';
import { EstatusViaje } from '../models/estatus-viaje.model';
import { Transporte } from '../models/transporte.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getLugares(): Observable<Lugar[]> {
    return this.http.get<Lugar[]>(`${this.apiUrl}/api/Lugares`).pipe(
      catchError((error) => {
        console.error('Error in getLugares:', error);
        console.log('Response:', error.error);
        throw error;
      })
    );
  }

  getEstatusViajes(): Observable<EstatusViaje[]> {
    return this.http.get<EstatusViaje[]>(`${this.apiUrl}/api/EstatusViaje`);
  }

  getTransportes(): Observable<Transporte[]> {
    return this.http.get<Transporte[]>(`${this.apiUrl}/api/Transportes`);
  }

  getEstatusNombre(estatusId: number): Observable<string> {
    return this.getEstatusViajes().pipe(
      map((estatusViajes: EstatusViaje[]) => {
        const estatus = estatusViajes.find((e: EstatusViaje) => e.id === estatusId);
        return estatus ? estatus.nombre : 'Desconocido';
      })
    );
  }
}
