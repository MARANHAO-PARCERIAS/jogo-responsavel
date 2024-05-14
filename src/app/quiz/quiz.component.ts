import { Component, OnInit } from '@angular/core';
import { Model, StylesManager, SurveyNG } from 'survey-angular';

const surveyJson = {
  elements: [{
    name: "FirstName",
    title: "Enter your first name:",
    type: "text"
  }, {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  }]
};

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  title = 'Auto Avaliação do jogo responsável';
  alertResults (sender : any) {
    const results = JSON.stringify(sender.data);
    alert(results);
  }
  constructor() { }

  ngOnInit(): void {
    StylesManager.applyTheme("modern");

    const survey = new Model(surveyJson);
    survey.onComplete.add(this.alertResults);
    SurveyNG.render("surveyContainer", { model: survey });
  }

}
