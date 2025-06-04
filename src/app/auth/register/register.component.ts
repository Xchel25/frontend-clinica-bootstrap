import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RegisterComponent {
  passwordStrength: string = '';
  strengthMessage: string = '';

  usuario = {
    nombre: '',
    correo: '',
    password: '',
    rol: 'admin' // <-- Añadimos el rol que espera el backend
  };

  constructor(private authService: AuthService) {}

  checkStrength(event: any) {
    const value = event.target.value;

    let strength = 0;
    if (value.length >= 6) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (/[0-9]/.test(value)) strength++;
    if (/[\W_]/.test(value)) strength++;

    if (strength <= 1) {
      this.passwordStrength = 'weak';
      this.strengthMessage = 'Débil';
    } else if (strength === 2) {
      this.passwordStrength = 'medium';
      this.strengthMessage = 'Media';
    } else {
      this.passwordStrength = 'strong';
      this.strengthMessage = 'Fuerte';
    }
  }

  registrar() {
    console.log('Datos enviados al backend:', this.usuario);

    this.authService.register(this.usuario).subscribe({
      next: (resp) => {
        console.log('Registro exitoso', resp);
        alert('Registro exitoso');
      },
      error: (err) => {
        console.error('Error al registrar', err);
        alert('Error al registrar');
      }
    });
  }
}
