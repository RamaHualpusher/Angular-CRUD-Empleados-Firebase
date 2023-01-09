import { Component, OnInit } from '@angular/core';
import { EmpleadoDataService } from '../empleado-data.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titulo = 'Agregar Empleados';
  nombre:string = "";
  apellido:string = "";
  edad:number = 0;
  cargo:string = "";
  salario:number = 0;

  constructor(private empleadoDataService:EmpleadoDataService){
  }

  ngOnInit(){
    //this.empleados = this.empleadoDataService.empleados;
    this.empleadoDataService.obtenerEmpleados().subscribe(misEmpleados=>{
      console.log(misEmpleados);
      this.empleados = Object.values(misEmpleados);
      this.empleadoDataService.setEmpleado(this.empleados);
    }
    );
      
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
    }else{
      this.empleadoDataService.emitirMensaje("Todos los campos son requeridos");
      //this.miServicio.muestraMensaje("Todos los campos son requeridos");
    }
  }
  // Empleado
  empleados:Empleado[] = []; //Se trae el arreglo de empleados del servicio
}
