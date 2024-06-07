import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { QuestionService } from 'src/app/quiz/service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public name: string = "";
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 40;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted: boolean = false;

  constructor(private questionService: QuestionService, private router: Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
  }

  getAllQuestions() {
    this.questionService.getQuestionJson()
      .subscribe(res => {
        this.questionList = res.questions;
      });
  }

  answer(currentQno: number, option: any) {
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
    } else {
      this.inCorrectAnswer++;
    }
    setTimeout(() => {
      this.currentQuestion++;
      this.resetCounter();
      this.getProgressPercent();
      if (this.currentQuestion === this.questionList.length) {
        this.isQuizCompleted = true;
        this.stopCounter();
      }
    }, 250);
  }

  startCounter() {
    this.interval$ = interval(1000).subscribe(val => {
      this.counter--;
      if (this.counter === 0) {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
        if (this.currentQuestion === this.questionList.length) {
          this.isQuizCompleted = true;
          this.stopCounter();
        }
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 400000);
  }

  stopCounter() {
    if (this.interval$) {
      this.interval$.unsubscribe();
    }
    this.counter = 0;
  }

  resetCounter() {
    this.stopCounter();
    this.counter = 40;
    this.startCounter();
  }

  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;
  }

  sairQuiz() {
    setTimeout(() => {
      this.router.navigate(['/welcome']);
    }, 250);
  }
}
