import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from '../models/category';
import { CrudOperation } from '../models/crud-operation-enum';
import { CategoryDialogData } from '../models/category-dialog-data';

@Component({
  selector: 'app-category-form-dialog',
  templateUrl: './category-form-dialog.component.html',
  styleUrls: ['./category-form-dialog.component.scss']
})
export class CategoryFormDialogComponent implements OnInit {

  @ViewChild('categoryForm') categoryForm: NgForm;

  formData = { name: '' };

  categoriesPath = 'categories';
  loading = false;

  mode = '';

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<CategoryFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CategoryDialogData
  ) { }

  ngOnInit() {
    this.mode = this.data.operation;
    if (this.data.operation === CrudOperation.UPDATE) {
      this.formData.name = this.data.category.name;
    }
  }

  onSubmit() {
    this.loading = true;
    if (this.data.operation === CrudOperation.CREATE) {
      this.http.post(`${environment.apiUrl}/${this.categoriesPath}`, this.formData).subscribe(
        (res: Category) => this.dialogRef.close(res),
        (err) => console.log(err)
      ).add(() => {
        this.loading = false;
      });
    } else if (this.data.operation === CrudOperation.UPDATE) {
      this.http.put(`${environment.apiUrl}/${this.categoriesPath}/${this.data.category.id}`, this.formData).subscribe(
        (res: Category) => this.dialogRef.close(res),
        (err) => console.log(err)
      ).add(() => {
        this.loading = false;
      });
    }
  }

  deleteCategory() {
    this.loading = true;
    this.http.delete(`${environment.apiUrl}/${this.categoriesPath}/${this.data.category.id}`).subscribe(
      () => this.dialogRef.close(this.data.category),
      (err) => console.log(err)
    ).add(() => {
      this.loading = false;
    });
  }

  cancelDelete() {
    this.dialogRef.close();
  }
}
