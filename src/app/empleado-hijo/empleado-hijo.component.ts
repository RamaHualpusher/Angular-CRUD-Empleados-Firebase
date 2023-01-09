import { Component, Input } from '@angular/core';
import { EmpleadoDataService } from '../empleado-data.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent {
  @Input() e:Empleado;
  @Input() i:number;

  constructor(private empleadoDataService:EmpleadoDataService) { }
  arrayCaracteristicas = [''];

  agregarCaracteristica(caracteristica: string) {
    if(caracteristica == ""){
      this.empleadoDataService.emitirMensaje("Caracteristica vacia");
      return;
    }
    this.empleadoDataService.emitirMensaje("Caracteristica agregada: "+caracteristica);
    this.arrayCaracteristicas.push(caracteristica);
  }


}
