import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarAreaComponent } from './navbar-area/navbar-area.component';
import { FormAreaComponent } from './form-area/form-area.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarAreaComponent,
    FormAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
