export class Empleado{

    constructor(nombre:string, apellido:string, edad:number, cargo:string, salario:number){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.cargo=cargo;
        this.salario=salario;
    }

    nombre:string="";
    apellido:string="";
    edad:number=0;
    cargo:string="";
    salario:number=0;

}