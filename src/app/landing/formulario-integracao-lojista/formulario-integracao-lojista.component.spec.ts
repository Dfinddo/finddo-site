import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioIntegracaoLojistaComponent } from './formulario-integracao-lojista.component';

describe('FormularioIntegracaoLojistaComponent', () => {
  let component: FormularioIntegracaoLojistaComponent;
  let fixture: ComponentFixture<FormularioIntegracaoLojistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioIntegracaoLojistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioIntegracaoLojistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
