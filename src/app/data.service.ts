import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient, private loginService:LoginServiceService) { }

  guardarEmpleados(empleados:Empleado[]){
    //Guardar en la base de datos
    const token=this.loginService.getIdToken();
    this.httpClient.put('https://cursoangular-rh-default-rtdb.firebaseio.com/datos.json?auth='+token,empleados).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
    
  }
  getEmpleados(){
    const token=this.loginService.getIdToken();
    return this.httpClient.get('https://cursoangular-rh-default-rtdb.firebaseio.com/datos.json?auth='+token);
  }
  actualizarEmpleados(indice:number, empleado:Empleado){
    const token=this.loginService.getIdToken();
    this.httpClient.put('https://cursoangular-rh-default-rtdb.firebaseio.com/datos/'+indice+'.json?auth='+token,empleado).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }
  eliminarEmpleado(indice:number){
    const token=this.loginService.getIdToken();
    this.httpClient.delete('https://cursoangular-rh-default-rtdb.firebaseio.com/datos/'+indice+'.json?auth='+token).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }
}
