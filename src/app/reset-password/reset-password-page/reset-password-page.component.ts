import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.scss']
})
export class ResetPasswordPageComponent implements OnInit {

  public password = '';
  public passwordConfirmation = '';

  public errorMessages: string[] = [];

  public isLoading = false;
  public success = false;
  public fail = false;

  private resetPasswordToken = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.resetPasswordToken = params.reset_password_token;
    });
  }

  submitPassword($event) {
    $event.preventDefault();

    const passwordRegex = /^[0-9a-zA-Z]*$/;

    this.errorMessages = [];

    if (!this.password) {
      this.errorMessages.push('Senha é obrigatória');
      return;
    }

    if (this.password.length < 8 || this.password.length > 12) {
      this.errorMessages.push('Senha deve ter entre 8 e 12 caracteres.');
      return;
    }

    if (!passwordRegex.test(this.password)) {
      this.errorMessages.push('Apenas letras (maiúsculas ou minúsculas) e números.');
      return;
    }

    if (this.password !== this.passwordConfirmation) {
      this.errorMessages.push('As senhas não conferem.');
      return;
    }

    this.isLoading = true;

    this.http
      .put(`${environment.apiUrl}/auth/password`,
        {
          password: this.password,
          password_confirmation: this.passwordConfirmation,
          reset_password_token: this.resetPasswordToken
        })
      .subscribe(
        response => {
          console.log(response);
          this.isLoading = false;
          this.success = true;
        },
        error => {
          console.log(error);
          this.isLoading = false;
          this.fail = true;
        });
  }
}
