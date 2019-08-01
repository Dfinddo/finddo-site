import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AngularTokenService } from 'angular-token';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(
    private tokenService: AngularTokenService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.tokenService.userSignedIn()) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }
}
