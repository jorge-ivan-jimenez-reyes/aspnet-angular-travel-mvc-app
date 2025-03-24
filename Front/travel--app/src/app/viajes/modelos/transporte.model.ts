export enum TipoTransporte {
  AVION = 'Avión',
  TREN = 'Tren',
  AUTOBUS = 'Autobús',
  BARCO = 'Barco',
  OTRO = 'Otro'
}

export interface Transporte {
  id: number;
  tipo: TipoTransporte;
  compania: string;
  numeroVuelo?: string;
}
