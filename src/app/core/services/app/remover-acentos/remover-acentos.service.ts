import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RemoverAcentosService {
  constructor() {}

  public execute(valor: string): string {
    const letrasComAcentos = 'áàãâäéèêëíìîïóòõôöúùûüñçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÑÇ';
    const letrasSemAcentos = 'aaaaaeeeeiiiiooooouuuuncAAAAAEEEEIIIIOOOOOUUUUNC';
    let valorSemAcentos = '';
    valor = valor.toLocaleLowerCase();
    for (let indice = 0; indice < valor.length; indice++) {
      const caractere = valor.substring(indice, indice + 1);
      const indiceCaractereEncontrado = letrasComAcentos.indexOf(caractere);
      if (indiceCaractereEncontrado >= 0) {
        valorSemAcentos += letrasSemAcentos.charAt(indiceCaractereEncontrado);
        continue;
      }
      valorSemAcentos += caractere;
    }
    return valorSemAcentos;
  }
}
