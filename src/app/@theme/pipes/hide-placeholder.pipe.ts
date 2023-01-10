import { Pipe, PipeTransform } from '@angular/core';
import { isObject } from 'lodash';
import omitDeep from 'deepdash/omitDeep';

@Pipe({
  name: 'hidePlaceholder',
})
export class HidePlaceholderPipe implements PipeTransform {

  transform(value: object, ...args: unknown[]): object {

    if (isObject(value)) {
      return omitDeep(value, 'isTemplatePlaceholder');
    }

    return value;
  }

}
