import { Component } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { EmpleadoDataService } from '../empleado-data.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css'],
})
export class ActualizarComponent {
  titulo = 'Actualiza Empleados';

  nombre: string = '';
  apellido: string = '';
  edad: number = 0;
  cargo: string = '';
  salario: number = 0;
  //Indice del empleado a actualizar en el arreglo de empleados desde el parametro de la ruta
  indice: number = 0;
  //Variable donde se especifica si se va a actualizar o eliminar un empleado
  accion:number;

  constructor(
    private empleadoDataService: EmpleadoDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    


  }

  ngOnInit() {
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);
    this.empleados = this.empleadoDataService.empleados;
    this.indice = this.route.snapshot.params['id'];
    let empleado:Empleado = this.empleadoDataService.obtenerEmpleadoIndice(this.indice);
    this.cargarEmpleado(empleado);

  }

  obtenerIndiceDesdeParamsURL() {
    let url:UrlTree = this.router.parseUrl(this.router.url);
    console.log(url.queryParams['id'])
    this.indice = parseInt(url.queryParams['id']);
  }
    


  cargarEmpleado(empleado:Empleado) {
    this.nombre = empleado.nombre;
    this.apellido = empleado.apellido;
    this.edad = empleado.edad;
    this.cargo = empleado.cargo;
    this.salario = empleado.salario;
  }

  
    

  actualizarEmpleado() {
    if (
      this.nombre != '' &&
      this.apellido != '' &&
      this.edad != 0 &&
      this.cargo != '' &&
      this.salario != 0
    ) {
      let empleado = new Empleado(
        this.nombre,
        this.apellido,
        this.edad,
        this.cargo,
        this.salario
      );
      //Ésta linea se ejecutaía en el servicio
      //this.empleados.push(new Empleado(this.nombre, this.apellido, this.edad, this.cargo, this.salario));
      this.empleadoDataService.actualizarEmpleado(this.indice,empleado);
      //this.miServicio.muestraMensaje("Empleado agregado: "+this.nombre+" "+this.apellido);
      this.nombre = '';
      this.apellido = '';
      this.edad = 0;
      this.cargo = '';
      this.salario = 0;
      //Timeout de 2 segundos para que se muestre el mensaje
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);
    } else {
      this.empleadoDataService.emitirMensaje('Todos los campos son requeridos');
      //this.miServicio.muestraMensaje("Todos los campos son requeridos");
    }
  }
  eliminarEmpleado() {
    this.empleadoDataService.eliminarEmpleado(this.indice);
    //Timeout de 2 segundos para que se muestre el mensaje
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);
  }
  modificarEmpleado() {
    if(this.accion == 1) {
      this.actualizarEmpleado();
    } else if(this.accion == 2) {
      this.eliminarEmpleado();
    }else {
      console.log("Accion: "+this.accion)
      alert("Error");
      this.router.navigate(['/']);
    }
  }
  // Empleado
  empleados: Empleado[] = []; //Se trae el arreglo de empleados del servicio
}
