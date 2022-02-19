import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'braCurrency',
})
export class BraCurrencyPipe extends CurrencyPipe implements PipeTransform {
  transform(valor: any, ...args: any[]): any {
    let valorFormatado: any = '';

    //Utilizando operador unário para garantir que o valor sempre seja convertido para number.
    const valorNumerico: number = +valor;

    const isValorInteiro = Number.isInteger(valorNumerico);

    if (isValorInteiro) {
      valorFormatado = super.transform(valorNumerico, 'BRL', 'symbol', '1.0-0');
    } else {
      valorFormatado = super.transform(valorNumerico, 'BRL', 'symbol', '1.2-2');
    }

    return valorFormatado.replace('\u00a0', ' ');
  }
}
