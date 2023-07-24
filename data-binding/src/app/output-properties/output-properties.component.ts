import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css'],
})
export class OutputPropertiesComponent {
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef | any  ;

  incrementa() {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({
      novoValor: this.campoValorInput.nativeElement.value,
    });
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({
      novoValor: this.campoValorInput.nativeElement.value,
    });
  }

  constructor(){
  }
}
