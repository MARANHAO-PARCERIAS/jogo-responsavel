import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarAreaComponent } from './navbar-area/navbar-area.component';
import { QuestionComponent } from './quiz/question/question/question.component';
import { WelcomeComponent } from './quiz/welcome/welcome/welcome.component';

const routes: Routes = [
  {path:"navbar-area", component:NavbarAreaComponent},
  {path:"welcome", component:WelcomeComponent},
  {path:"question", component:QuestionComponent},
  {path:'', pathMatch:"full", redirectTo:'navbar-area'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
