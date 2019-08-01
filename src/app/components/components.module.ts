import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import { LoadDialogComponent } from './load-dialog/load-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    RouterModule
  ],
  declarations: [NavigationBarComponent, LoadDialogComponent],
  exports: [NavigationBarComponent],
  entryComponents: [LoadDialogComponent]
})
export class ComponentsModule { }
