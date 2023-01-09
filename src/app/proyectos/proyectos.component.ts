import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoDataService } from '../empleado-data.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  titulo = 'Agregar Empleados';
  nombre:string = "";
  apellido:string = "";
  edad:number = 0;
  cargo:string = "";
  salario:number = 0;

  constructor(private empleadoDataService:EmpleadoDataService, private router:Router){
  }

  ngOnInit(){
    this.empleados = this.empleadoDataService.empleados;
  }

  agregarEmpleado(){
    if(this.nombre != "" && this.apellido != "" && this.edad != 0 && this.cargo != "" && this.salario != 0){
    let empleado = new Empleado(this.nombre, this.apellido, this.edad, this.cargo, this.salario);
    //Ésta linea se ejecutaía en el servicio
    //this.empleados.push(new Empleado(this.nombre, this.apellido, this.edad, this.cargo, this.salario));
    this.empleadoDataService.agregarEmpleadoData(empleado);
    //this.miServicio.muestraMensaje("Empleado agregado: "+this.nombre+" "+this.apellido);
    this.nombre = "";
    this.apellido = "";
    this.edad = 0;
    this.cargo = "";
    this.salario = 0;
    //Timeout de 2 segundos para que se muestre el mensaje
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
    }else{
      this.empleadoDataService.emitirMensaje("Todos los campos son requeridos");
      //this.miServicio.muestraMensaje("Todos los campos son requeridos");
    }

  }
  // Empleado
  empleados:Empleado[] = []; //Se trae el arreglo de empleados del servicio
}
