import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctor',
  imports: [FormsModule,CommonModule],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {
@Input() close!: () => void;

  busqueda: string = '';

  // Datos de ejemplo
  doctors = [
    { nombre: 'Juan', apellidos: 'Pérez', email: 'juan.perez@email.com', estado: 'Activo' },
    { nombre: 'María', apellidos: 'Gómez', email: 'maria.gomez@email.com', estado: 'Inactivo' },
    { nombre: 'Carlos', apellidos: 'Ruiz', email: 'carlos.ruiz@email.com', estado: 'Activo' }
  ];

  doctorsFiltrados() {
    if (!this.busqueda) {
      return this.doctors;
    }
    const texto = this.busqueda.toLowerCase();
    return this.doctors.filter(p =>
      p.nombre.toLowerCase().includes(texto) ||
      p.apellidos.toLowerCase().includes(texto) ||
      p.email.toLowerCase().includes(texto)
    );
  }
}
