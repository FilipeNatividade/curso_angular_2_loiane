import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  static getCurso: any;
  getCursos() {
    return [
      {
        id: 1,
        nome: 'angular',
      },
      {
        id: 2,
        nome: 'javascript',
      },
    ];
  }

  getCurso(id: number): any {
    let cursos = this.getCursos();
    console.log('getCurso',cursos ,id)
    for (let i = 0; i < cursos.length; i++) {
      let curso = cursos[i];
      if (curso.id === id) {
        return curso;
      }
      return null;
    }
  }

  constructor() {}
}
