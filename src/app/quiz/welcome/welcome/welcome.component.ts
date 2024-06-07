import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('name') nameKey!: ElementRef;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  startQuiz(): void {
    const name = this.nameKey.nativeElement.value;
    localStorage.setItem("name", name);
    this.router.navigate(['/question']);
  }

  onKeyDown(event: KeyboardEvent): void {
    const actionKeys = ['Enter', 'Go', 'Next', 'Done', 'Enviar', 'Concluir', 'OK', 'Pronto', 'Finalizar', 'Avançar'];
    if (actionKeys.includes(event.key)) {
      this.startQuiz();
    }
  }
}
