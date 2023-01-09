import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { MensajesService } from './mensajes.service';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { EmpleadoDataService } from './empleado-data.service';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginServiceService } from './login-service.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './login/login-guardian';


//Declarar una constante para enrutar
const routes:Routes = [
  {path:"", component:HomeComponent},
  {path:"proyectos", component:ProyectosComponent, canActivate:[LoginGuardian]},
  {path:"quienes", component:QuienesComponent},
  {path:"contacto", component:ContactoComponent, canActivate:[LoginGuardian]},
  {path:"actualiza/:id", component:ActualizarComponent},
  {path:"login", component:LoginComponent},
  {path:"**", component:ErrorPersonalizadoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesComponent,
    ContactoComponent,
    ActualizarComponent,
    ErrorPersonalizadoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes), //Importar el módulo de rutas
    HttpClientModule
  ],
  providers: [
    MensajesService,
    EmpleadoDataService,
    DataService,
    LoginServiceService,
    CookieService,
    LoginGuardian
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
