import { Component, OnInit } from '@angular/core';
import { Content, Monedas, selecmoneda } from '../../interfaces/monedas.interface';
import { MonedaService } from '../../services/moneda.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cambio',
  templateUrl: './cambio.component.html',
  styles: [
  ]
})
export class CambioComponent implements OnInit {

  public _Selectuno: Content[] = []
  public _Selectdos: Content[] = []

  monetempo: Content[] = []
  monedostempo: Content[] = []

  nuevo: Monedas = {
    valor: 0,
    symbol1: '',
    symbol2: ''
  }
  _filamoneda: selecmoneda = {
    simb: '',
    simb2: ''
  }
  miFormulario: FormGroup = this.fb.group({
    valor: ['', Validators.required],
    simbolo: ['', Validators.required],
    simbolodos: ['', Validators.required]
  })
  resultados: number = 0

  constructor(private MonedaService: MonedaService,
    private fb: FormBuilder) { }
  ngOnInit() {
    this._filamoneda = this.MonedaService.consultaorden()
    this._actualizarform()
    this.MonedaService.getpruebas()
      .subscribe(resultado => {
        this._Selectuno = resultado.content.filter((x: Content) => x.type == "CRYPTO");
        this._Selectdos = resultado.content.filter((x: Content) => x.type == "FIAT");
      })
    // Cuando cambie el valor de moneda 
    this.miFormulario.get('valor')?.valueChanges
      .subscribe(numero => {
        this._consultarcambio()
      })
    // Cuando cambie el tipo de moneda 
    this.miFormulario.get('simbolo')?.valueChanges
      .subscribe(moneda => {
        console.log('evento 1')
        this._consultarcambio()
      })
      // Cuando cambie el tipo de moneda dos
      this.miFormulario.get('simbolodos')?.valueChanges
      .subscribe(monedados => {
        console.log('evento 2')
        this._consultarcambio()
      })
  }
  _consultarcambio() {
    // this.miFormulario.valid
    this.nuevo.symbol1 = this.miFormulario.value.simbolo
    this.nuevo.symbol2 = this.miFormulario.value.simbolodos
    this.nuevo.valor = this.miFormulario.value.valor
    if (this.nuevo.valor == 0 || this.nuevo.symbol1.trim() == '' || this.nuevo.symbol2 == '') {
      return;
    }
    this.MonedaService.getvalormonedas(this.miFormulario.value.simbolo, this.miFormulario.value.simbolodos)
      .subscribe(valor => {
        if (valor.Response == 'Error') {
          Swal.fire('Error', 'Tipo moneda no disponible para conversión', 'error');
          this.resultados = 0
        } else {
          const dato = valor[this.nuevo.symbol2];
          this.resultados = this.nuevo.valor * dato
        }
      })
  }
  _actualizarform() {
    this.miFormulario.setValue({
      valor: '',
      simbolo: this._filamoneda.simb,
      simbolodos: this._filamoneda.simb2
    });
  }
  cambiarbusqueda() {
    this.monetempo = this._Selectuno
    this.monedostempo = this._Selectdos
    if (this._Selectuno[0].type == 'CRYPTO' && this._Selectdos[0].type == 'FIAT') {
      this._Selectuno = this.monedostempo
      this._Selectdos = this.monetempo
      this.miFormulario.controls.valor.setValue('');
      this.miFormulario.controls.simbolo.setValue(this._filamoneda.simb2);
      this.miFormulario.controls.simbolodos.setValue(this._filamoneda.simb);
    }else{
      this._Selectuno = this.monedostempo
      this._Selectdos = this.monetempo 
      this.miFormulario.controls.valor.setValue('');
      this.miFormulario.controls.simbolo.setValue(this._filamoneda.simb);
      this.miFormulario.controls.simbolodos.setValue(this._filamoneda.simb2);
    }
  }
}
