import { Routes } from '@angular/router';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';

export const resetPasswordRoutes: Routes = [
  { path: 'auth/password/edit', component: ResetPasswordPageComponent }
];
