export interface Viaje {
  id: number;
  nombre: string;
  fechaInicio: Date;
  fechaFin: Date;
  origenId: number;
  destinoId: number;
  transporteId: number;
  estatusId: number;
  costo: number;
  descripcion?: string;
}
