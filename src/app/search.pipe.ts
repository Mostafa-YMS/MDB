import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], term: string): any {
    if (term == undefined || term == '') {
      return items;
    }
    return items.filter(function (item) {
      try {
        return item.title.toLowerCase().includes(term.toLowerCase());
      } catch {
        return item.name.toLowerCase().includes(term.toLowerCase());
      }
    });
  }
}
