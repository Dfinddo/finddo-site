import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriesCrudComponent } from './subcategories-crud.component';

describe('SubcategoriesCrudComponent', () => {
  let component: SubcategoriesCrudComponent;
  let fixture: ComponentFixture<SubcategoriesCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoriesCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoriesCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
