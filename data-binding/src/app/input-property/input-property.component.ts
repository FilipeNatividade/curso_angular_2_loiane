import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent {
@Input() nomeDoCurso: string = ''

// @Input('nome') nomeDoCurso: string = '
// caso eu queira pegar uma variavel(props) que se chama nome e e mudar o nome dela dentro desse componente eu posso fazer desse jeito a cima
// '

}
