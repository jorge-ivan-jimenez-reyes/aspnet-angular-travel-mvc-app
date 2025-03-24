import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// Define las rutas como un literal constante
const routes: Routes = [
  { path: '', redirectTo: 'viajes', pathMatch: 'full' },
  { path: 'viajes', loadChildren: () => import('./viajes/viajes.module').then(m => m.ViajesModule) }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Esto es estático porque `routes` es un literal constante.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
