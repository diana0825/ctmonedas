import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { ListadoComponent } from './listado.component';

describe('ListadoComponent', () => {
  let component: ListadoComponent;
  let fixture: ComponentFixture<ListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, ScrollingModule],
      declarations: [ListadoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('se crea component', () => {
    expect(component).toBeTruthy();
  });

  // it('should render at least 4 items', fakeAsync(() => { // <---
  //   const compiled = fixture.debugElement.nativeElement as HTMLElement;
  //   expect(compiled.querySelectorAll('.separator').length).toBeGreaterThanOrEqual(4);

  // }));
});
