import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { loginRoutes } from './login/login-routing.module';
import { categoriesRoutes } from './categories/categories-routing.module';

import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AuthGuardService } from 'src/services/auth-guard.service';

const routes: Routes = [
  ...loginRoutes,
  {
    path: 'console', component: NavigationBarComponent, canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService], children: [...categoriesRoutes]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
