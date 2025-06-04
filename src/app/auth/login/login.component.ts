import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  password: string = '';
  private _snackBar = inject(MatSnackBar);

  showPassword = false;

  constructor(private router: Router, private authService: AuthService) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    const credentials = {
      correo: this.correo,
      password: this.password
    };

    this.authService.login(credentials).subscribe({
      next: (resp) => {
        console.log('Login exitoso', resp);
        localStorage.setItem('token', resp.token);

        // NUEVO: leer el rol desde el token y guardarlo
        const rol = this.authService.getRol();
        localStorage.setItem('tipoUsuario', rol || '');

        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Error al iniciar sesión', err);
        this._snackBar.open('Datos incorrectos o usuario no encontrado', '', { duration: 2000 });
      }
    });
  }
}
