import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatDialogRef } from '@angular/material/dialog';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-form-dialog',
  templateUrl: './category-form-dialog.component.html',
  styleUrls: ['./category-form-dialog.component.scss']
})
export class CategoryFormDialogComponent implements OnInit {

  @ViewChild('categoryForm') categoryForm: NgForm;

  formData = { name };

  categoriesPath = 'categories';
  loading = false;
  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<CategoryFormDialogComponent>
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loading = true;
    this.http.post(`${environment.apiUrl}/${this.categoriesPath}`, this.formData).subscribe(
      (res: Category) => this.dialogRef.close(res),
      (err) => console.log(err)
    ).add(() => {
      this.loading = false;
    });
  }
}
