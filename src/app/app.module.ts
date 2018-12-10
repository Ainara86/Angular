import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';

// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { FlujoInformacionComponent } from './components/flujo-informacion/flujo-informacion.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { VideojuegoDetalleComponent } from './components/videojuego-detalle/videojuego-detalle.component';
import { FrutaCardComponent } from './components/fruta-card/fruta-card.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { FrutaDetalleComponent } from './components/fruta-detalle/fruta-detalle.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { AlertasComponent } from './components/alertas/alertas.component';
import { ListadoComponent } from './components/listado/listado.component';
import { BackofficeComponent } from './components/backoffice/backoffice.component';
import { LoginComponent } from './components/login/login.component';

// Pipes
import { VideojuegoPipe } from './pipes/videojuego.pipe';

import { TareasPipe } from './pipes/tareas.pipe';
import { PipeComponent } from './components/pipe/pipe.component';

// Providers o servicios
import { FrutaService } from './providers/fruta.service';
import { TareaService } from './providers/tarea.service';
import { LoginService } from './providers/login.service';



//guards
import { BackofficeGuard } from './guards/backoffice.guard';

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
    ListadoComponent,
    BackofficeComponent,
    LoginComponent
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
    TareaService,
    LoginService,
    BackofficeGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }