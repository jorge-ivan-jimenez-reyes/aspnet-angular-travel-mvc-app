export interface Viaje {
  id?: number;
  destino: string;
  fechaInicio: Date;
  fechaFin: Date;
  presupuesto: number;
  lugarId: number;
  estatusId: number;
  transporteId: number;
}
