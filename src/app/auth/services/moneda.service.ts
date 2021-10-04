import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Monedacompletas, selecmoneda } from '../interfaces/monedas.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MonedaService {

  private apikey: string = "8f92653f48d4a8cfe8e2281460812901fa3394744cb4e2ea12c4181024b6c274"
  public _filamoneda: selecmoneda = {
    simb: 'BTCP',
    simb2: 'USD'
  }

  constructor(private http: HttpClient) { }
  
  getvalormonedas(symbol1: string, symbol2: string): Observable<any>{
    const url: string = `https://min-api.cryptocompare.com/data/price?fsym=${symbol1}&tsyms=${symbol2}&api_key=${this.apikey}`
    return this.http.get<any>(url)
  }
  getpruebas(): Observable<Monedacompletas>{
    return this.http.get<Monedacompletas>("https://bravenewcoin.p.rapidapi.com/asset?status=ACTIVE", {
      "headers": {
        "x-rapidapi-host": "bravenewcoin.p.rapidapi.com",
        "x-rapidapi-key": "785fa28483msh3ab706bcec9de7ap12b9c6jsn7719f0d9d498"
      }
    });
  }
  modificarconsulta(lista: string, tipo: string){
    let letras = lista
    let clase = tipo
    if(clase == 'CRYPTO'){
      this._filamoneda.simb = letras
    }else{
      this._filamoneda.simb2 = letras
    }
  }
  consultaorden() {
       return this._filamoneda        
  }

}
