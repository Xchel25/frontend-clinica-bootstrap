import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-appointments',
  imports: [],
  templateUrl: './my-appointments.component.html',
  styleUrl: './my-appointments.component.css'
})
export class MyAppointmentsComponent {
  @Input() close!: () => void;
}
