import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Empleado } from './empleado.model';
import { MensajesService } from './mensajes.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoDataService {

  constructor(private mensajeService:MensajesService, private data:DataService) { }

  empleados:Empleado[] = [];
  // Empleado
  // empleados:Empleado[] = [
  //   new Empleado("Juan", "Perez", 25, "Programador", 1000),
  //   new Empleado("Maria", "Gomez", 30, "Diseñador", 1500),
  //   new Empleado("Pedro", "Gonzalez", 28, "Programador", 1200),
  //   new Empleado("Ana", "Lopez", 35, "Diseñador", 1800),
  //   new Empleado("Luis", "Martinez", 22, "Programador", 800)
  //   ]

  setEmpleado(empleados:Empleado[]){
    this.empleados = empleados;
  }
  obtenerEmpleados(){
    return this.data.getEmpleados();
  }
  agregarEmpleadoData(empleado:Empleado){
    this.mensajeService.muestraMensaje("Empleado agregado: "+empleado.nombre+" "+empleado.apellido);
    this.empleados.push(empleado);
    this.data.guardarEmpleados(this.empleados);
  }
  emitirMensaje(mensaje:String){
    this.mensajeService.muestraMensaje(mensaje);
  }
  obtenerEmpleadoIndice(indice:number){
    return this.empleados[indice];
  }
  actualizarEmpleado(indice:number, empleado:Empleado){
    this.empleados[indice] = empleado;
    this.data.actualizarEmpleados(indice, empleado);
    this.data.guardarEmpleados(this.empleados);
  }
  eliminarEmpleado(indice:number){
    this.empleados.splice(indice,1);
    this.data.eliminarEmpleado(indice);
    if(this.empleados.length != null){
      this.data.guardarEmpleados(this.empleados);
    }
  }
}
