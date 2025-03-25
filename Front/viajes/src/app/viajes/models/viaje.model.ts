export interface Viaje {
  id?: number;
  origen: string;
  destino: string;
  fechaHoraInicio: string | Date;
  fechaHoraFin: string | Date;
  operador: string;
  presupuesto: number;
  lugarId: number;
  transporteId?: number;
  estatusId: number;
  descripcion?: string;
}
