import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './new-features/home/home.component';
import { ListadoPersonasComponent } from './feature/listado-personas/listado-personas.component';
import { SearchComponent } from './new-features/list/search/search.component';

const routes: Routes = [
  {path: '' , component:  HomeComponent , pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
