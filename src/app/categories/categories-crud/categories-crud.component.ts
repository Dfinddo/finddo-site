import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriesService } from '../categories.service';
import { Category } from '../models/category';
import { MatDialog } from '@angular/material/dialog';
import { CategoryFormDialogComponent } from '../category-form-dialog/category-form-dialog.component';
import { CrudOperation } from '../models/crud-operation-enum';

@Component({
  selector: 'app-categories-crud',
  templateUrl: './categories-crud.component.html',
  styleUrls: ['./categories-crud.component.scss']
})
export class CategoriesCrudComponent implements OnInit {
  displayedColumns = ['name', 'edit', 'actions'];
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
      height: '70%',
      data: { operation: CrudOperation.CREATE }
    });

    dialogRef.afterClosed().subscribe(
      (data: Category) => {
        if (data) {
          this.categoryData.unshift(data);
          this.dataSource = new MatTableDataSource<Category>(this.categoryData);
        }
      }
    );
  }

  editCategory(category: Category): void {
    const dialogRef = this.dialog.open(CategoryFormDialogComponent, {
      width: '80%',
      height: '70%',
      data: { operation: CrudOperation.UPDATE, category }
    });

    dialogRef.afterClosed().subscribe(
      (data: Category) => {
        if (data) {
          const categoryToUpdate = this.categoryData.filter(
            (cat) => {
              return cat.id === data.id;
            })[0];
          const indexToUpdate = this.categoryData.indexOf(categoryToUpdate);
          this.categoryData[indexToUpdate] = data;
          this.dataSource = new MatTableDataSource<Category>(this.categoryData);
        }
      }
    );
  }

  deleteCategory(category: Category): void {
    const dialogRef = this.dialog.open(CategoryFormDialogComponent, {
      width: '80%',
      height: '70%',
      data: { operation: CrudOperation.DELETE, category }
    });

    dialogRef.afterClosed().subscribe(
      (data: Category) => {
        if (data) {
          const categoryToRemove = this.categoryData.filter(
            (cat) => {
              return cat.id === data.id;
            })[0];
          const indexToRemove = this.categoryData.indexOf(categoryToRemove);
          this.categoryData.splice(indexToRemove, 1);
          this.dataSource = new MatTableDataSource<Category>(this.categoryData);
        }
      }
    );
  }
}
