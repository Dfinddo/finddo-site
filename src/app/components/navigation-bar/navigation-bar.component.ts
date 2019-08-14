import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularTokenService } from 'angular-token';
import { MatDialog } from '@angular/material/dialog';
import { LoadDialogComponent } from '../load-dialog/load-dialog.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  categoriesRoutes = '/console/categorias';

  constructor(
    public dialog: MatDialog,
    private tokenService: AngularTokenService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logOut() {
    const dialogRef = this.dialog.open(LoadDialogComponent, {
      width: '150px',
      height: '150px',
    });
    this.tokenService.signOut().subscribe(
      () => {
        dialogRef.close();
        this.router.navigate(['']);
      }
    );
  }
}
