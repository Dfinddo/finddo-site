import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
import { TermosServicoComponent } from './termos-servico/termos-servico.component';
import { RedirectCadastroWirecardComponent } from './redirect-cadastro-wirecard/redirect-cadastro-wirecard.component';
import { FormularioIntegracaoLojistaComponent } from './formulario-integracao-lojista/formulario-integracao-lojista.component';

@NgModule({
  declarations: [LandingPageComponent, PoliticaPrivacidadeComponent, TermosServicoComponent, RedirectCadastroWirecardComponent, FormularioIntegracaoLojistaComponent],
  imports: [
    CommonModule,
  ]
})
export class LandingModule { }
