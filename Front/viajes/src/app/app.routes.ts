import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'viajes',
        pathMatch: 'full'
    },
    {
        path: 'viajes',
        loadChildren: () => import('./viajes/viajes.module').then(m => m.ViajesModule)
    }
];
