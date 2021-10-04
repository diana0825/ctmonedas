import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ScrollingModule } from '@angular/cdk/scrolling';

import { MainComponent } from './pages/main/main.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CambioComponent } from './pages/cambio/cambio.component';
import { ListadoComponent } from './pages/listado/listado.component';



@NgModule({
  declarations: [
    CambioComponent,
    ListadoComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ScrollingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
