import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Viaje } from '../models/viaje.model';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {
  private apiUrl = 'http://localhost:5000/api/viajes'; // Adjust this URL to match your backend API

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

  updateViaje(id: number, viaje: Viaje): Observable<Viaje> {
    return this.http.put<Viaje>(`${this.apiUrl}/${id}`, viaje);
  }

  deleteViaje(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
