import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }

  muestraMensaje(mensaje:String){
    alert(mensaje);
  }
  mensajeError(mensaje:String){
    alert(mensaje);
  }

}
