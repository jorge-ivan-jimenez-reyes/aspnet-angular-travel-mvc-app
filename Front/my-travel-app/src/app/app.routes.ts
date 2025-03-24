import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./viajes/componentes/viajes.component').then(m => m.ViajesComponent)
  }
];
