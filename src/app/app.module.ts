import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { FlujoInformacionComponent } from './components/flujo-informacion/flujo-informacion.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { VideojuegoDetalleComponent } from './components/videojuego-detalle/videojuego-detalle.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { FrutaDetalleComponent } from './components/fruta-detalle/fruta-detalle.component';
import { TareaComponent } from './components/tarea/tarea.component';
// Pipes
import { VideojuegoPipe } from './pipes/videojuego.pipe';
import { FrutaCardComponent } from './components/fruta-card/fruta-card.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { TareasPipe } from './pipes/tareas.pipe';

// Providers o servicios
import { FrutaService } from './providers/fruta.service';
import { TareaService } from './providers/tarea.service';
import { HttpClient } from 'selenium-webdriver/http';
import { FormularioComponent } from './components/formulario/formulario.component';
import { AlertasComponent } from './components/alertas/alertas.component';
import { ListadoComponent } from './components/listado/listado.component';


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    FlujoInformacionComponent,
    HomeComponent,
    Page404Component,
    VideojuegoDetalleComponent,
    PipeComponent,
    VideojuegoPipe,
    FrutaDetalleComponent,
    FrutaCardComponent,
    ComparadorComponent,
    TareaComponent,
    TareasPipe,
    FormularioComponent,
    AlertasComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //banana in a box [(ngModule)]
    ReactiveFormsModule, //Formularios reactivos. Mas complejos
    HttpClientModule //Servicio REST
  ],
  providers: [
    FrutaService,
    TareaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }