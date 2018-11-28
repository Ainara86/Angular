export class Videojuego {
    private _titulo: String;
    
    private _imagen: String;
   
    private _descripcion: String;
    
    private _anyo: number;           //Año de publicación
    
    private _precio: number;
    
    private _alquilado: boolean;
   
    constructor(){
        this.titulo='Sin titulo';
        this.imagen='assets/imgs/videogame_cover.png';
        this.descripcion='Lorem ipsum....';
        this.anyo=0;
        this.precio=0;
        this.alquilado=false;
    }
    public get titulo(): String {
        return this._titulo;
    }
    public set titulo(value: String) {
        this._titulo = value;
    }
    public get imagen(): String {
        return this._imagen;
    }
    public set imagen(value: String) {
        this._imagen = value;
    }
    public get descripcion(): String {
        return this._descripcion;
    }
    public set descripcion(value: String) {
        this._descripcion = value;
    }
    public get anyo(): number {
        return this._anyo;
    }
    public set anyo(value: number) {
        this._anyo = value;
    }
    public get precio(): number {
        return this._precio;
    }
    public set precio(value: number) {
        this._precio = value;
    }
    public get alquilado(): boolean {
        return this._alquilado;
    }
    public set alquilado(value: boolean) {
        this._alquilado = value;
    }
}
