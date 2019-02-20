import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { CursosComponent } from './cursos/cursos.component';
import { DetalleCursoComponent } from './cursos/detalle-curso/detalle-curso.component';
import { PrimaryComponent } from './primary/primary.component';
import { ExportableComponent } from './exportable/exportable.component';
const routes: Routes = [
  { path: 'personas', component: ListadoPersonasComponent,  pathMatch: 'full'},
  { path: 'tarjetas/:id', component: TarjetaComponent},
  { path: 'cursos',  component: CursosComponent},
  { path: 'cursos/nuevo',  component: DetalleCursoComponent},
  { path: 'cursos/primary',  component: PrimaryComponent},
  { path: 'cursos/export',  component: ExportableComponent},
  {path: '**', redirectTo: 'personas'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
