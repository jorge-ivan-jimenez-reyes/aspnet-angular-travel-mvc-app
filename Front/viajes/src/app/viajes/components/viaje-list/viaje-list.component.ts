import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from '../../models/viaje.model';

@Component({
  selector: 'app-viaje-list',
  templateUrl: './viaje-list.component.html',
  styleUrls: ['./viaje-list.component.scss']
})
export class ViajeListComponent implements OnInit {
  viajes: Viaje[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // TODO: Fetch viajes from a service
  }

  onNewViaje(): void {
    this.router.navigate(['/viajes/new']);
  }

  onEditViaje(viaje: Viaje): void {
    this.router.navigate(['/viajes/edit', viaje.id]);
  }

  onDeleteViaje(viaje: Viaje): void {
    // TODO: Implement delete functionality
    console.log('Delete viaje:', viaje);
  }
}
