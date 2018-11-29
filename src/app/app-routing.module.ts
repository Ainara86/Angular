import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { FrutaComponent } from './components/fruta/fruta.component';
import { FlujoInformacionComponent } from './components/flujo-informacion/flujo-informacion.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { VideojuegoDetalleComponent } from './components/videojuego-detalle/videojuego-detalle.component';
import { PersonaDetalleComponent } from './components/persona-detalle/persona-detalle.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { FrutaDetalleComponent } from './components/fruta-detalle/fruta-detalle.component';

//Pipes
//videojuegospipe

//Providers o servicios

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'fruta', component: FrutaComponent},
    { path: 'arrays', component: FrutaDetalleComponent},
    { path: 'videojuego-detalle', component: VideojuegoDetalleComponent},
    { path: 'persona-detalle', component: PersonaDetalleComponent},
    { path: 'pipe', component: PipeComponent},
    { path: 'flujo', component: FlujoInformacionComponent},
    { path: '',  redirectTo: '/home',  pathMatch: 'full'},
    { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
