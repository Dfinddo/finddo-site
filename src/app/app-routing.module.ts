import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { loginRoutes } from './login/login-routing.module';
import { categoriesRoutes } from './categories/categories-routing.module';

import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { subcategoriesRoutes } from './subcategories/subcategories-routing.module';
import { landingRoutes } from './landing/landing-routing.module';
import { resetPasswordRoutes } from './reset-password/reset-password-routing.module';

const routes: Routes = [
  ...landingRoutes,
  ...loginRoutes,
  ...resetPasswordRoutes,
  {
    path: 'console',
    component: NavigationBarComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    children: [
      ...categoriesRoutes,
      ...subcategoriesRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
