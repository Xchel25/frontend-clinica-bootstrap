import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-data',
  imports: [CommonModule],
  templateUrl: './edit-data.component.html',
  styleUrl: './edit-data.component.css'
})
export class EditDataComponent {
  @Input() close!: () => void;
}
