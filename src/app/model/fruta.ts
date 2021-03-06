import { defineInjector } from '@angular/core';
import { RadioControlRegistry } from '@angular/forms/src/directives/radio_control_value_accessor';

export class Fruta {
    private _id: number;
    
    private _nombre: string;
    private _precio: number;
    private _calorias: number;
    private _colores: string[];
    private _oferta: boolean;
    private _descuento: number;
    private _foto: string;
    private _cantidad: number;
    
    
    
   
    constructor(){
        this.id=-1;
        this.nombre='';
        this.precio=0;
        this.calorias=0;
        this.colores=[''];
        this.oferta=false;
        this.descuento=0;
        this.foto='https://www.google.es/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi5386ts_neAhWxxIUKHbh1B0YQjRx6BAgBEAU&url=http%3A%2F%2Fisanidad.com%2F84459%2Finvestigacion-determina-que-el-consumo-de-frutas-y-verduras-podria-reducir-el-riesgo-de-epoc%2F&psig=AOvVaw1qx8IC9dU4dEEuUJUuLHNY&ust=1543573989611683';
        this.cantidad=0;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get precio(): number {
        return this._precio;
    }
    public set precio(value: number) {
        this._precio = value;
    }
    
    public get calorias(): number {
        return this._calorias;
    }
    public set calorias(value: number) {
        this._calorias = value;
    }
    
    public get colores(): string[] {
        return this._colores;
    }
    public set colores(value: string[]) {
        this._colores = value;
    }
    
    public get oferta(): boolean {
        return this._oferta;
    }
    public set oferta(value: boolean) {
        this._oferta = value;
    }

    public get foto(): string {
        return this._foto;
    }
    public set foto(value: string) {
        this._foto = value;
    }

    public get descuento(): number {
        return this._descuento;
    }
    public set descuento(value: number) {
        this._descuento = value;
    }
    public get cantidad(): number {
        return this._cantidad;
    }
    public set cantidad(value: number) {
        this._cantidad = value;
    }

}


