import { MonedaService } from './moneda.service';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl, FormBuilder } from '@angular/forms';

describe('MonedaService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: MonedaService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new MonedaService(httpClientSpy as any);
  });

  it('Debe de crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('Debe retornar el objeto (valor) de la moneda'), (done: DoneFn) => {
    const mockdatacoins = {
      monedauno: 'BTC',
      monedados: 'USD'
    }
    const mockResultapi = {
      "USD": 41439.15
    }
    httpClientSpy.get.and.returnValue(of(mockResultapi))
    const { monedauno, monedados } = mockdatacoins

    service.getvalormonedas(monedauno, monedados)
      .subscribe(result => {
        expect(result).toEqual(mockResultapi)
        done()
      })
  }

  it('get debe de retornar objeto de monedas probando la primer linea'), (done: DoneFn) => {
    service.getpruebas()
      .subscribe(value => {
        console.log(value)
        expect(value.content[0].type).toEqual("FIAT");
        done();
      });
  }
  it('Revisar objeto devuelva valores del select', () => {
    const _filamoneda = {
      simb: 'BTCP',
      simb2: 'USD'
    }
    expect(service.consultaorden()).toEqual(_filamoneda)
  })
});
