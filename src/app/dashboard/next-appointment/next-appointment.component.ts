import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-next-appointment',
  standalone: true,
  templateUrl: './next-appointment.component.html',
  styleUrls: ['./next-appointment.component.css'],
  imports: [CommonModule]
})
export class NextAppointmentComponent {
  @Input() close!: () => void;
}
