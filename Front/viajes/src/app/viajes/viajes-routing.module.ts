import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViajesComponent } from './components/viajes/viajes.component';
import { ViajeFormComponent } from './components/viaje-form/viaje-form.component';
import { ViajeListComponent } from './components/viaje-list/viaje-list.component';

const routes: Routes = [
  {
    path: '',
    component: ViajesComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ViajeListComponent },
      { path: 'new', component: ViajeFormComponent },
      { path: 'edit/:id', component: ViajeFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViajesRoutingModule { }
