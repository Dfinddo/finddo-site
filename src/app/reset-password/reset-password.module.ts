import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ResetPasswordPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ResetPasswordModule { }
