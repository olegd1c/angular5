import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, ...args: Array<any>): any {
    if (!value) {
      return null;
    }
    if (!Array.isArray(value)) {
      throw  new Error(value + ' is not array');
    }
    const name: string = args[0];
    const items: Array<any> = value;
    items.sort((a, b) => {
      if (a[name] > b[name]) {
        return -1;
      } else if (a[name] === b[name]) {
        return 0;
      } else {
        return 1;
      }
    });
    return items;
  }

}
