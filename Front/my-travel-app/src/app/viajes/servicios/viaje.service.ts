import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Viaje } from '../modelos/viaje.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ViajeService {
  private apiUrl = 'http://localhost:5038/api/viajes'; // Cambia el puerto si es diferente

  constructor(private http: HttpClient) {}

  getViajes(): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(this.apiUrl);
  }

  getViajeById(id: number): Observable<Viaje> {
    return this.http.get<Viaje>(`${this.apiUrl}/${id}`);
  }

  createViaje(viaje: Viaje): Observable<Viaje> {
    return this.http.post<Viaje>(this.apiUrl, viaje);
  }

  updateViaje(id: number, viaje: Viaje): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, viaje);
  }

  deleteViaje(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
