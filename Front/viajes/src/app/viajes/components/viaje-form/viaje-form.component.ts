import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Viaje } from '../../models/viaje.model';

@Component({
  selector: 'app-viaje-form',
  templateUrl: './viaje-form.component.html',
  styleUrls: ['./viaje-form.component.scss']
})
export class ViajeFormComponent implements OnInit {
  viajeForm: FormGroup;
  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.viajeForm = this.fb.group({
      destino: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      presupuesto: ['', [Validators.required, Validators.min(0)]],
      lugarId: ['', Validators.required],
      estatusId: ['', Validators.required],
      transporteId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      // TODO: Fetch viaje details and populate form
    }
  }

  onSubmit(): void {
    if (this.viajeForm.valid) {
      const viaje: Viaje = this.viajeForm.value;
      // TODO: Save viaje using a service
      console.log('Saving viaje:', viaje);
      this.router.navigate(['/viajes']);
    }
  }
}
