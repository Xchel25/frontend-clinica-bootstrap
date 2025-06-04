import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-agenda',
  standalone: true,
  templateUrl: './view-agenda.component.html',
  styleUrls: ['./view-agenda.component.css'],
  imports: [CommonModule]
})
export class ViewAgendaComponent {
  @Input() close!: () => void;

  // Aquí podrías cargar la agenda desde un servicio en el futuro
}
