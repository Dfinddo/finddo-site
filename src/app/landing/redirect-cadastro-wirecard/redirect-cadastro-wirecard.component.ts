import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-redirect-cadastro-wirecard',
  templateUrl: './redirect-cadastro-wirecard.component.html',
  styleUrls: ['./redirect-cadastro-wirecard.component.scss']
})
export class RedirectCadastroWirecardComponent implements OnInit {

  public isLoading = true;
  public success = false;
  public fail = false;

  private code = '';
  private id = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      Object.keys(params).forEach(param => {
        if (param === 'code') {
          this.code = params[param];
        } else {
          this.id = param;
        }
      });

      const oldCode = localStorage.getItem('code');

      if (oldCode) {
        if (oldCode !== this.code) {
          localStorage.setItem('code', this.code);
          this.gerarNovoToken();
        }
      } else if (this.code.length > 0) {
        localStorage.setItem('code', this.code);
        this.gerarNovoToken();
      }
    });
  }

  gerarNovoToken() {
    this.http
      .post(`${environment.apiUrl}/users/get_token_wirecard`,
        { code: this.code, id: this.id })
      .subscribe(_ => {
        this.success = true;
        this.isLoading = false;
      }, _ => {
        this.fail = true;
        this.isLoading = false;
      });
  }
}
