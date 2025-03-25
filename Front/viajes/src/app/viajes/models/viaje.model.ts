export interface Viaje {
  id?: number;
  nombre?: string;
  fechaInicio: string;
  fechaFin: string;
  origenId: number;
  destinoId: number;
  transporteId: number;
  estatusId: number;
  costo?: number;
  descripcion?: string;
}
