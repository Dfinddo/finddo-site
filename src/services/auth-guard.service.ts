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

  validateTokenAndRedirect() {
    this.tokenService.validateToken().subscribe(
      () => { },
      () => {
        if (this.tokenService.userSignedIn()) {
          this.tokenService.signOut().subscribe();
        }
      }
    );
  }

  canActivate(): boolean {
    this.validateTokenAndRedirect();
    if (this.tokenService.userSignedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }
}
