import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss']
})
export class ViajesComponent {
  title = 'Gestión de Viajes';

  constructor(private router: Router) {}

  navigateToNewViaje(): void {
    this.router.navigate(['/viajes/new']);
  }
}
