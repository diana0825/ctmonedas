import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent {
  constructor(private router: Router) {}

  claseTitular: string = "";
  clasesegundaria: string = ""; 
  consultapesta1(){
    this.claseTitular = "texto-titulo-active"
    this.clasesegundaria = ""
    this.router.navigateByUrl('/auth')
  }
  consultapesta2(){
    this.claseTitular = ""
    this.clasesegundaria = "texto-titulo-active"
    this.router.navigateByUrl('/auth/Listado')
  }
}
