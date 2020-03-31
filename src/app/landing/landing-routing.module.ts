import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
import { TermosServicoComponent } from './termos-servico/termos-servico.component';
import { RedirectCadastroWirecardComponent } from './redirect-cadastro-wirecard/redirect-cadastro-wirecard.component';

export const landingRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'privacidade', component: PoliticaPrivacidadeComponent },
  { path: 'termos', component: TermosServicoComponent },
  { path: 'redirect', component: RedirectCadastroWirecardComponent }
];
