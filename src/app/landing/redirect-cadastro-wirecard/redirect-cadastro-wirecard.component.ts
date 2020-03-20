import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect-cadastro-wirecard',
  templateUrl: './redirect-cadastro-wirecard.component.html',
  styleUrls: ['./redirect-cadastro-wirecard.component.scss']
})
export class RedirectCadastroWirecardComponent implements OnInit {

  url = '';

  constructor() { }

  ngOnInit() {
    // window.location.href = 'finddo://finddo/index';
  }

}
