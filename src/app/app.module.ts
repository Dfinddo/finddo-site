import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularTokenModule } from 'angular-token';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { CategoriesModule } from './categories/categories.module';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularTokenModule.forRoot({
      apiBase: 'https://finddo-back-dev.herokuapp.com',
    }),
    HttpClientModule,
    CategoriesModule,
    ComponentsModule,
    LoginModule
  ],
  providers: [AngularTokenModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
