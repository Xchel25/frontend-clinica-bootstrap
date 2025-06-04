import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

import { ScheduleModalComponent } from '../schedule-modal/schedule-modal.component';
import { ViewAgendaComponent } from '../view-agenda/view-agenda.component';
import { NextAppointmentComponent } from '../next-appointment/next-appointment.component';
import { PatientListComponent } from '../patient-list/patient-list.component';
import { EditDataComponent } from "../edit-data/edit-data.component";
import { ScheduleAppointmentComponent } from "../schedule-appointment/schedule-appointment.component";
import { MyAppointmentsComponent } from '../my-appointments/my-appointments.component';
import { PatientsComponent } from "../patients/patients.component";
import { DoctorComponent } from "../doctor/doctor.component";
import { AppointmentsComponent } from "../appointments/appointments.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    ScheduleModalComponent,
    ViewAgendaComponent,
    NextAppointmentComponent,
    PatientListComponent,
    EditDataComponent,
    ScheduleAppointmentComponent,
    MyAppointmentsComponent,
    PatientsComponent,
    DoctorComponent,
    AppointmentsComponent
  ]
})
export class HomeComponent implements OnInit {
  tipoUsuario: string = '';
  activeModal: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.tipoUsuario = this.authService.getRol() || '';
  } 

  openModal(modalName: string) {
    this.activeModal = modalName;
  }

  closeModal() {
    this.activeModal = '';
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
