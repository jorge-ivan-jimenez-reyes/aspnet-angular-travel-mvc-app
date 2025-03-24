import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// Importa otros componentes, por ejemplo, tu ViajesComponent:
import { ViajesComponent } from './viajes/componentes/viajes.component';

const routes: Routes = [
  { path: '', component: ViajesComponent },
  // Otras rutas si las tienes
];

@NgModule({
  declarations: [
    AppComponent,
    ViajesComponent,
    // Declara aquí todos los demás componentes que usabas standalone
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    // Otros módulos que necesites (por ejemplo, Angular Material, etc.)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
