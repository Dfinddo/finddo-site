import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'finddo-adm';

  constructor(
    private http: HttpClient,
    private tokenService: AngularTokenService
  ) { }

  ngOnInit() {
    this.tokenService.signIn({
      login: 'teste@email.com',
      password: '12345678'
    }).subscribe(
      () => {
        this.http.get('http://localhost:3000/drums').subscribe(
          (res) => console.log(res),
          (err) => console.error(err)
        );
      },
      error => console.log(error)
    );
  }
}
