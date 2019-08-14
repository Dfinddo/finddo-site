import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudOperation } from 'src/app/categories/models/crud-operation-enum';
import { environment } from 'src/environments/environment';
import { SubcategoryDialogData } from '../models/subcategory-dialog-data';
import { Subcategory } from '../models/subcategory';
import { Category } from 'src/app/categories/models/category';

@Component({
  selector: 'app-subcategories-form-dialog',
  templateUrl: './subcategories-form-dialog.component.html',
  styleUrls: ['./subcategories-form-dialog.component.scss']
})
export class SubcategoriesFormDialogComponent implements OnInit {

  @ViewChild('subcategoryForm') subcategoryForm: NgForm;

  formData = { name: '', category_id: '' };

  categoriesPath = 'categories';
  subcategoriesPath = 'subcategories';
  loading = false;

  mode = '';

  categories: Category[] = [];

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<SubcategoriesFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SubcategoryDialogData
  ) { }

  ngOnInit() {
    this.mode = this.data.operation;
    if (this.data.operation === CrudOperation.UPDATE) {
      this.formData.name = this.data.subcategory.name;
      this.formData.category_id = this.data.subcategory.category.id;
    }

    this.loading = true;
    this.http.get<Category[]>(`${environment.apiUrl}/${this.categoriesPath}`).subscribe(
      (res: Category[]) => this.categories = [...res],
      (err) => console.log(err)
    ).add(() => {
      this.loading = false;
    });
  }

  onSubmit() {
    this.loading = true;
    if (this.data.operation === CrudOperation.CREATE) {
      this.http.post(`${environment.apiUrl}/${this.subcategoriesPath}`, this.formData).subscribe(
        (res: Subcategory) => this.dialogRef.close(res),
        (err) => console.log(err)
      ).add(() => {
        this.loading = false;
      });
    } else if (this.data.operation === CrudOperation.UPDATE) {
      this.http.put(`${environment.apiUrl}/${this.subcategoriesPath}/${this.data.subcategory.id}`, this.formData).subscribe(
        (res: Subcategory) => this.dialogRef.close(res),
        (err) => console.log(err)
      ).add(() => {
        this.loading = false;
      });
    }
  }

  deleteSubcategory() {
    this.loading = true;
    this.http.delete(`${environment.apiUrl}/${this.subcategoriesPath}/${this.data.subcategory.id}`).subscribe(
      () => this.dialogRef.close(this.data.subcategory),
      (err) => console.log(err)
    ).add(() => {
      this.loading = false;
    });
  }

  cancelDelete() {
    this.dialogRef.close();
  }

}
