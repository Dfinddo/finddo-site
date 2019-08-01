import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData, AngularTokenService } from 'angular-token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  @ViewChild('signInForm') signInForm: NgForm;

  signInData: SignInData = {} as SignInData;

  loggingIn = false;

  categoriesRoute = '/console/categorias';

  constructor(
    private tokenService: AngularTokenService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.tokenService.userSignedIn()) {
      this.router.navigate([this.categoriesRoute]);
    }
  }

  onSubmit() {
    this.loggingIn = true;
    this.tokenService.signIn(this.signInData).subscribe(
      () => {
        this.router.navigate([this.categoriesRoute]);
      }, error => {
        this.loggingIn = false;
        setTimeout(() => { this.signInForm.resetForm(); }, 50);
        console.log(error);
      }
    );
  }

}
