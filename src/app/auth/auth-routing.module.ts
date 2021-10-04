import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent} from './pages/main/main.component';
import { CambioComponent } from './pages/cambio/cambio.component';
import { ListadoComponent} from './pages/listado/listado.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'Cambio', component: CambioComponent },
      { path: 'Listado', component: ListadoComponent },
      // { path: 'Cambio/:id', component: CambioComponent },
      { path: '**', redirectTo: 'Cambio' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
