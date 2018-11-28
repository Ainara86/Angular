import { defineInjector } from '@angular/core';
enum Sexo{
    masculino,
    femenino,
    indefinido,
}
export class Persona {
    private _nombre: String;
    
    private _apellidos: String;
    
    private _Sexo;
    
    private _email: String;
    
    private _edad: number;
   
    constructor(){
        this.nombre='Anonimo';
        this.apellidos='';
        this.Sexo=2;
        this.email='';
        this.edad=16;
    }

    public get nombre(): String {
        return this._nombre;
    }
    public set nombre(value: String) {
        this._nombre = value;
    }

    public get apellidos(): String {
        return this._apellidos;
    }
    public set apellidos(value: String) {
        this._apellidos = value;
    }

    public get Sexo() {
        return this._Sexo;
    }
    public set Sexo(value) {
        this._Sexo = value;
    }
    public get email(): String {
        return this._email;
    }
    public set email(value: String) {
        this._email = value;
    }
    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }


}


//Persona por defecto yo mismo y mi compañero

