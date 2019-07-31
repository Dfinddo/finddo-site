import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularTokenModule } from 'angular-token';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TesteComponent } from './teste/teste.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularTokenModule.forRoot({
      // Change to your local dev environment example: 'http://localhost:3000'
      apiBase: 'http://localhost:3000',
    }),
    HttpClientModule,
    MatTableModule
  ],
  providers: [AngularTokenModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
