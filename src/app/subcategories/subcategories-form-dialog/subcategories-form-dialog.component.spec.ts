import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriesFormDialogComponent } from './subcategories-form-dialog.component';

describe('SubcategoriesFormDialogComponent', () => {
  let component: SubcategoriesFormDialogComponent;
  let fixture: ComponentFixture<SubcategoriesFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoriesFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoriesFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
