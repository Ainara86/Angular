import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes propios
import { FrutaComponent } from './components/fruta/fruta.component';
import { FlujoInformacionComponent } from './components/flujo-informacion/flujo-informacion.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { VideojuegoDetalleComponent } from './components/videojuego-detalle/videojuego-detalle.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { FrutaDetalleComponent } from './components/fruta-detalle/fruta-detalle.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoComponent } from './components/listado/listado.component';
import { BackofficeComponent } from './components/backoffice/backoffice.component';
import { BackofficeGuard } from './guards/backoffice.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'fruta', component: FrutaComponent},
    { path: 'formulario', component: FormularioComponent},
    { path: 'detalle/:id', component: FormularioComponent},
    { path: 'listado', component: ListadoComponent},
    { path: 'pipe', component: PipeComponent},
    { path: 'arrays', component: FrutaDetalleComponent},
    { path: 'comparador', component: ComparadorComponent},
    { path: 'login', component: LoginComponent},
    { path: 'privado', component: BackofficeComponent, canActivate:[BackofficeGuard]},
    { path: 'videojuego-detalle', component: VideojuegoDetalleComponent },
    { path: 'flujo', component: FlujoInformacionComponent},
    { path: 'tareas', component: TareaComponent},
    { path: '',  redirectTo: '/home',  pathMatch: 'full'},
    { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }