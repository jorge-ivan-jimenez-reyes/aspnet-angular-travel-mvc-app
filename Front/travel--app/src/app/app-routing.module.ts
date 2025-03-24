import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'viajes', loadChildren: () => import('./viajes/viajes.module').then(m => m.ViajesModule) },
  { path: '', redirectTo: '/viajes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
