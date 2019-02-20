import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { CambiarFondoDirective } from '../core/cambiar-fondo/cambiar-fondo.directive';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from './cursos/shared/cursos.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatFormFieldModule, MatSelectModule,
   MatInputModule, MatDatepickerModule, MatNativeDateModule,
   MatSlideToggleModule,
   MatButtonModule} from '@angular/material';
import { MatChipsModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { DetalleCursoComponent } from './cursos/detalle-curso/detalle-curso.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { PrimaryComponent } from './primary/primary.component';
import { ExportableComponent } from './exportable/exportable.component';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    FeatureRoutingModule,
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
  declarations: [ListadoPersonasComponent, TarjetaComponent,
    CambiarFondoDirective, CursosComponent, DetalleCursoComponent, PrimaryComponent, ExportableComponent],
  exports: [ListadoPersonasComponent, TarjetaComponent,
    CambiarFondoDirective, CursosComponent, DetalleCursoComponent],
  providers: [CursosService]
})
export class FeatureModule { }
