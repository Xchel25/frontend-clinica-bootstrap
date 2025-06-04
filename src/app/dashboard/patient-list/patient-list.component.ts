import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  imports: [CommonModule, FormsModule]  // IMPORTANTE: FormsModule para [(ngModel)]
})
export class PatientListComponent {
  @Input() close!: () => void;

  busqueda: string = '';

  // Datos de ejemplo
  pacientes = [
    { nombre: 'Juan', apellidos: 'Pérez', email: 'juan.perez@email.com', estado: 'Activo' },
    { nombre: 'María', apellidos: 'Gómez', email: 'maria.gomez@email.com', estado: 'Inactivo' },
    { nombre: 'Carlos', apellidos: 'Ruiz', email: 'carlos.ruiz@email.com', estado: 'Activo' }
  ];

  pacientesFiltrados() {
    if (!this.busqueda) {
      return this.pacientes;
    }
    const texto = this.busqueda.toLowerCase();
    return this.pacientes.filter(p =>
      p.nombre.toLowerCase().includes(texto) ||
      p.apellidos.toLowerCase().includes(texto) ||
      p.email.toLowerCase().includes(texto)
    );
  }
}
