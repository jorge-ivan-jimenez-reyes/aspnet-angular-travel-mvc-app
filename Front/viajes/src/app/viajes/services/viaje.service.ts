import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Viaje } from '../models/viaje.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {
  private apiUrl = `${environment.apiUrl}/api/Viajes`;

  constructor(private http: HttpClient) { }

  getViajes(): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(this.apiUrl).pipe(
      map(viajes => viajes.map(viaje => ({
        ...viaje,
        fechaHoraInicio: typeof viaje.fechaHoraInicio === 'string' ? new Date(viaje.fechaHoraInicio) : viaje.fechaHoraInicio,
        fechaHoraFin: typeof viaje.fechaHoraFin === 'string' ? new Date(viaje.fechaHoraFin) : viaje.fechaHoraFin
      })))
    );
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
