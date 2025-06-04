import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component'; // <-- Standalone

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    RegisterComponent // 👈 Importas el standalone component aquí
  ]
})
export class AuthModule { }
