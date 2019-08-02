import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriesService } from '../categories.service';
import { Category } from '../models/category';
import { MatDialog } from '@angular/material/dialog';
import { CategoryFormDialogComponent } from '../category-form-dialog/category-form-dialog.component';

@Component({
  selector: 'app-categories-crud',
  templateUrl: './categories-crud.component.html',
  styleUrls: ['./categories-crud.component.scss']
})
export class CategoriesCrudComponent implements OnInit {
  displayedColumns = ['name'];
  categoryData = [];
  dataSource = new MatTableDataSource<Category>(this.categoryData);

  constructor(
    private categoriesService: CategoriesService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe(
      (res) => {
        this.categoryData = [...res];
        this.dataSource = new MatTableDataSource<Category>(this.categoryData);
      },
      (err) => console.log(err)
    );
  }

  createCategory(): void {
    const dialogRef = this.dialog.open(CategoryFormDialogComponent, {
      width: '80%',
      height: '70%'
    });

    dialogRef.afterClosed().subscribe(
      (data: Category) => {
        this.categoryData.unshift(data);
        this.dataSource = new MatTableDataSource<Category>(this.categoryData);
      }
    );
  }
}
