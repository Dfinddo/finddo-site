import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-integracao-lojista',
  templateUrl: './formulario-integracao-lojista.component.html',
  styleUrls: ['./formulario-integracao-lojista.component.scss']
})
export class FormularioIntegracaoLojistaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.replace('https://forms.gle/8FJsxBE8tSg9KKQM8');
  }

}
