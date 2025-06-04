import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointments',
  imports: [CommonModule,FormsModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent {
@Input() close!: () => void;

  busqueda: string = '';

  // Datos de ejemplo de citas
  citas = [
    { paciente: 'Juan Pérez', fecha: '2025-06-01', hora: '10:00', estado: 'Pendiente' },
    { paciente: 'María Gómez', fecha: '2025-06-02', hora: '11:30', estado: 'Confirmada' },
    { paciente: 'Carlos Ruiz', fecha: '2025-06-03', hora: '09:00', estado: 'Cancelada' }
  ];

  citasFiltradas() {
    const texto = this.busqueda.toLowerCase();
    return this.citas.filter(cita =>
      cita.paciente.toLowerCase().includes(texto) ||
      cita.fecha.includes(texto) ||
      cita.hora.includes(texto) ||
      cita.estado.toLowerCase().includes(texto)
    );
  }
}
