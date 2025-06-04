import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-schedule-appointment',
  imports: [],
  templateUrl: './schedule-appointment.component.html',
  styleUrl: './schedule-appointment.component.css'
})
export class ScheduleAppointmentComponent {
  @Input() close!: () => void;
}
