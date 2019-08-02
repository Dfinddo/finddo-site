import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { CategoriesCrudComponent } from './categories-crud/categories-crud.component';
import { CategoryFormDialogComponent } from './category-form-dialog/category-form-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CategoriesCrudComponent, CategoryFormDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  exports: [
    CategoriesCrudComponent,
  ],
  entryComponents: [CategoryFormDialogComponent]
})
export class CategoriesModule { }
