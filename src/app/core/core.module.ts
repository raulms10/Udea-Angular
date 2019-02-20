import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  MatButtonModule,
          MatIconModule,
          MatMenuModule,
          MatToolbarModule} from '@angular/material';


import { CoreRoutingModule } from './core-routing.module';
import { MenuComponent } from './menu/menu.component';
import { SaludoComponent } from './saludo/saludo.component';
import { MultiplicadorPipe } from './pipes/multiplicador.pipe';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule
  ],
  declarations: [SaludoComponent, MenuComponent, MultiplicadorPipe],
  exports: [SaludoComponent, MenuComponent, MultiplicadorPipe]
})
export class CoreModule { }
