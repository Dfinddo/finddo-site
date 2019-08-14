import { Component, OnInit } from '@angular/core';
import { SubcategoriesService } from '../subcategories.service';
import { MatTableDataSource } from '@angular/material/table';
import { Subcategory } from '../models/subcategory';
import { MatDialog } from '@angular/material/dialog';
import { CrudOperation } from 'src/app/categories/models/crud-operation-enum';
import { SubcategoriesFormDialogComponent } from '../subcategories-form-dialog/subcategories-form-dialog.component';

@Component({
  selector: 'app-subcategories-crud',
  templateUrl: './subcategories-crud.component.html',
  styleUrls: ['./subcategories-crud.component.scss']
})
export class SubcategoriesCrudComponent implements OnInit {

  displayedColumns = ['name', 'edit', 'actions'];
  subcategoryData = [];
  dataSource = new MatTableDataSource<Subcategory>(this.subcategoryData);

  constructor(
    private subcategoriesService: SubcategoriesService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getSubcategories();
  }

  getSubcategories() {
    this.subcategoriesService.getSubcategories().subscribe(
      (res) => {
        this.subcategoryData = [...res];
        this.dataSource = new MatTableDataSource<Subcategory>(this.subcategoryData);
      },
      (err) => console.log(err)
    );
  }

  createSubcategory(): void {
    const dialogRef = this.dialog.open(SubcategoriesFormDialogComponent, {
      width: '80%',
      height: '70%',
      data: { operation: CrudOperation.CREATE }
    });

    dialogRef.afterClosed().subscribe(
      (data: Subcategory) => {
        if (data) {
          this.subcategoryData.unshift(data);
          this.dataSource = new MatTableDataSource<Subcategory>(this.subcategoryData);
        }
      }
    );
  }

  editSubcategory(subcategory: Subcategory): void {
    const dialogRef = this.dialog.open(SubcategoriesFormDialogComponent, {
      width: '80%',
      height: '70%',
      data: { operation: CrudOperation.UPDATE, subcategory }
    });

    dialogRef.afterClosed().subscribe(
      (data: Subcategory) => {
        if (data) {
          const subcategoryToUpdate = this.subcategoryData.filter(
            (cat) => {
              return cat.id === data.id;
            })[0];
          const indexToUpdate = this.subcategoryData.indexOf(subcategoryToUpdate);
          this.subcategoryData[indexToUpdate] = data;
          this.dataSource = new MatTableDataSource<Subcategory>(this.subcategoryData);
        }
      }
    );
  }

  deleteSubcategory(subcategory: Subcategory): void {
    const dialogRef = this.dialog.open(SubcategoriesFormDialogComponent, {
      width: '80%',
      height: '70%',
      data: { operation: CrudOperation.DELETE, subcategory }
    });

    dialogRef.afterClosed().subscribe(
      (data: Subcategory) => {
        if (data) {
          const subcategoryToRemove = this.subcategoryData.filter(
            (cat) => {
              return cat.id === data.id;
            })[0];
          const indexToRemove = this.subcategoryData.indexOf(subcategoryToRemove);
          this.subcategoryData.splice(indexToRemove, 1);
          this.dataSource = new MatTableDataSource<Subcategory>(this.subcategoryData);
        }
      }
    );
  }

}
