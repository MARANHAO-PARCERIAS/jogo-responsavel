import { ChangeBgDirective } from './change-bg.directive';
import { ElementRef, Renderer2 } from '@angular/core'; // Importe ElementRef e Renderer2

describe('ChangeBgDirective', () => {
  it('should create an instance', () => {
    const elMock = {} as ElementRef<any>; // Crie um objeto mock para ElementRef
    const renderMock = {} as Renderer2; // Crie um objeto mock para Renderer2
    const directive = new ChangeBgDirective(elMock, renderMock); // Passe os objetos mock como argumentos
    expect(directive).toBeTruthy();
  });
});
