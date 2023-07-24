import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css'],
})
export class DataBidingComponent {
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImage = 'https://picsum.photos/200/300';
  valorAtual: string = '';
  valorSalvo: string = '';
  teste: string = 'rqwerty';
  valorSalvoBlur: string = '';
  isMouseOver: boolean = false;
  nomeDoCurso: string = 'angular';
  valorInicial: number = 15;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any) {
    this.valorSalvo = (<HTMLInputElement>valor.target).value;
  }

  salvarValorBlur(valor: any) {
    this.valorSalvoBlur = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: { novoValor: any; }) {
    console.log(evento.novoValor);
  }
}
