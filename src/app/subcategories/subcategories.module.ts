import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoriesCrudComponent } from './subcategories-crud/subcategories-crud.component';
import { SubcategoriesFormDialogComponent } from './subcategories-form-dialog/subcategories-form-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [SubcategoriesCrudComponent, SubcategoriesFormDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTableModule
  ],
  exports: [SubcategoriesCrudComponent],
  entryComponents: [SubcategoriesFormDialogComponent]
})
export class SubcategoriesModule { }
