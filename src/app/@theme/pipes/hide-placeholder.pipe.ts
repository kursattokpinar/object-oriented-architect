import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidePlaceholder'
})
export class HidePlaceholderPipe implements PipeTransform {

  transform(value: object, ...args: unknown[]): unknown {
    return null;
  }

}
