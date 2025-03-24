import { Routes } from '@angular/router';
import { ViajesComponent } from './viajes/components/viajes/viajes.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'viajes',
        pathMatch: 'full'





    },
    {
        path: 'viajes',
        component: ViajesComponent
    }
    
];
