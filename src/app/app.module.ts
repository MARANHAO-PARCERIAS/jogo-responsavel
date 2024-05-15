import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarAreaComponent } from './navbar-area/navbar-area.component';
import { FormAreaComponent } from './form-area/form-area.component';
import { QuizComponent } from './quiz/quiz.component';
import { HeaderComponent } from './quiz/header/header/header.component';
import { QuestionComponent } from './quiz/question/question/question.component';
import { WelcomeComponent } from './quiz/welcome/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarAreaComponent,
    FormAreaComponent,
    QuizComponent,
    HeaderComponent,
    QuestionComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
