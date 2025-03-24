import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lugar } from '../models/lugar.model';
import { EstatusViaje } from '../models/estatus-viaje.model';
import { Transporte } from '../models/transporte.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private apiUrl = 'http://localhost:5000/api'; // Adjust this URL to match your backend API

  constructor(private http: HttpClient) { }

  getLugares(): Observable<Lugar[]> {
    return this.http.get<Lugar[]>(`${this.apiUrl}/lugares`);
  }

  getEstatusViajes(): Observable<EstatusViaje[]> {
    return this.http.get<EstatusViaje[]>(`${this.apiUrl}/estatus-viajes`);
  }

  getTransportes(): Observable<Transporte[]> {
    return this.http.get<Transporte[]>(`${this.apiUrl}/transportes`);
  }
}
