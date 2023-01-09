import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent {

  @Output() newCaracteristica = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  addNewCaracteristica(value: string) {
    this.newCaracteristica.emit(value);
  }
}
