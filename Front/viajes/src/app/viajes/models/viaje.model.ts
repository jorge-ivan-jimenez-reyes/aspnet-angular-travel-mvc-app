export interface Viaje {
  id?: number;
  nombre: string;
  fechaInicio: string | Date;
  fechaFin: string | Date;
  origenId: number;
  destinoId: number;
  transporteId: number;
  estatusId: number;
  costo: number;
  descripcion?: string;
}
