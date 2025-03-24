import { Lugar } from './lugar.model';
import { Transporte } from './transporte.model';
import { EstatusViaje } from './estatus-viaje.model';

export interface Viaje {
  id: number;
  destino: Lugar;
  fechaInicio: Date;
  fechaFin: Date;
  transporte: Transporte;
  estatus: EstatusViaje;
}
