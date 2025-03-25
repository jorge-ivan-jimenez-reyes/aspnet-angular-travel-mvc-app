import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Viaje } from '../models/viaje.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {
  private apiUrl = `${environment.apiUrl}/api/Viajes`;

  constructor(private http: HttpClient) { }

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
