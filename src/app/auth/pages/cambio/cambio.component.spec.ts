import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CambioComponent } from './cambio.component';

describe('CambioComponent', () => {
  let component: CambioComponent;
  let fixture: ComponentFixture<CambioComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormsModule],
      declarations: [ CambioComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea componente', () => {
    expect(component).toBeTruthy();
  });
  it('Forma inválida cuando está vacía',() => {
    expect(component.miFormulario.valid).toBeFalsy();
  })
  it('verifique el valor de (valor, simbuno, simbdos) antes de ingresar algún valor y validación',()=>{
    const formularioini = component.miFormulario
    const formulariovalue = {
      valor: '', 
      simbolo: 'BTCP', 
      simbolodos: 'USD'
    }
    expect(formularioini.value).toEqual(formulariovalue)
  })
  it(('verifique el valor de (valor, simbuno, simbdos) cuando sea invalido'),() => {
    const formularioini = component.miFormulario
    const formulariovalue = {
      valor: '', 
      simbolo: '', 
      simbolodos: ''
    }
    expect(formularioini.value).not.toEqual(formulariovalue)
  })
  
  // it('validez del campo de valor', () => {
  //   let valorini = component.miFormulario.controls['valor'];
  //   expect(valorini.valid).toBeFalsy();
  // })

  it('debe probar la validez del formulario', ()=>{
    expect(component.miFormulario.valid).toBeFalsy()
    component.miFormulario.controls['valor'].setValue("34500")
    component.miFormulario.controls['simbolo'].setValue("BTC")
    component.miFormulario.controls['simbolodos'].setValue("USD")
    expect(component.miFormulario.valid).toBeTruthy()

  })
});
