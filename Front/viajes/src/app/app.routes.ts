import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'viajes',
        loadChildren: () => import('./viajes/viajes.module').then(m => m.ViajesModule)
    }
];
