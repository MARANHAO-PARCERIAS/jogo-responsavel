import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeBgDirective } from './quiz/change-bg.directive';
import { QuestionComponent } from './quiz/question/question/question.component';
import { QuizComponent } from './quiz/quiz.component';
import { WelcomeComponent } from './quiz/welcome/welcome/welcome.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionComponent,
    WelcomeComponent,
    ChangeBgDirective,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
