import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule, MatFormFieldModule, MatSelectModule,
  MatInputModule, MatDatepickerModule, MatNativeDateModule,
  MatSlideToggleModule, MatButtonModule, MatChipsModule, MatIconModule} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { NewFeaturesRoutingModule } from './new-features-routing.module';
import { TarjetaComponent } from '../feature/tarjeta/tarjeta.component';
import { ListComponent } from './list/list.component';
import { CambiarFondoDirective } from '../core/cambiar-fondo/cambiar-fondo.directive';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddComponent } from './list/add/add.component';
import { SearchComponent } from './list/search/search.component';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    NewFeaturesRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule
  ],
  declarations: [ListComponent, TarjetaComponent,
    CambiarFondoDirective, HomeComponent, AboutComponent, AddComponent, SearchComponent],
  exports: [ListComponent, TarjetaComponent,
    CambiarFondoDirective, HomeComponent, AboutComponent, AddComponent, SearchComponent]
})
export class NewFeaturesModule { }
