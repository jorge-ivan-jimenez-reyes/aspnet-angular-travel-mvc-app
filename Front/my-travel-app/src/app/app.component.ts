import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViajesComponent } from './viajes/componentes/viajes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ViajesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-travel-app';
}
