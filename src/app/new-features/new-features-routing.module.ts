import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { AboutComponent } from './about/about.component';
import { TarjetaComponent } from '../feature/tarjeta/tarjeta.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,  pathMatch: 'full'},
  { path: 'list/:id', component: TarjetaComponent},
  { path: 'list',  component: ListComponent},
  { path: 'about',  component: AboutComponent},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewFeaturesRoutingModule { }
