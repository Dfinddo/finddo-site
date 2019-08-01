import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesCrudComponent } from './categories-crud/categories-crud.component';

@NgModule({
  declarations: [CategoriesCrudComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CategoriesCrudComponent,
  ]
})
export class CategoriesModule { }
