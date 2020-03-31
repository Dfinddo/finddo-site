import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectCadastroWirecardComponent } from './redirect-cadastro-wirecard.component';

describe('RedirectCadastroWirecardComponent', () => {
  let component: RedirectCadastroWirecardComponent;
  let fixture: ComponentFixture<RedirectCadastroWirecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectCadastroWirecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectCadastroWirecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
