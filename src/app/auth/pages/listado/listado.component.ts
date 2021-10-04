import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MonedaService } from '../../services/moneda.service';
import { Content } from '../../interfaces/monedas.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {
  public totalmonedas: Content[] = []
  constructor(private router: Router,
    private MonedaService: MonedaService) { }
  ngOnInit() {
    this.MonedaService.getpruebas()
    .subscribe(resultado => {
      console.log(resultado);
      this.totalmonedas = resultado.content
    })
  }
  myfunt(lista: string, tipo: string) {
    this.MonedaService.modificarconsulta(lista, tipo)
    this.router.navigateByUrl('/auth');
  }
}
