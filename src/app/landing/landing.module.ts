import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
import { TermosServicoComponent } from './termos-servico/termos-servico.component';

@NgModule({
  declarations: [LandingPageComponent, PoliticaPrivacidadeComponent, TermosServicoComponent],
  imports: [
    CommonModule,
  ]
})
export class LandingModule { }
