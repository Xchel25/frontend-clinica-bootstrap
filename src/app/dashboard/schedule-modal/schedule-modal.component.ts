import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule-modal',
  standalone: true,
  templateUrl: './schedule-modal.component.html',
  styleUrls: ['./schedule-modal.component.css'],
  imports: [CommonModule]
})
export class ScheduleModalComponent {
  @Input() close!: () => void;
}
