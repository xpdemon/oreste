import { Pipe, PipeTransform } from '@angular/core';
import { Arme } from './equipement/orest/arme.interface';

@Pipe({
  name: 'find'
})
export class FindPipe implements PipeTransform {

  transform(items: any[], term: string): any {
    // I am unsure what id is here. did you mean title?
    if (!term) {return items;
    } else {
      term = term.toLocaleLowerCase();
      term = term.replace(' ', '-');
      return items.filter(item => item._id.indexOf(term) !== -1);
    }
}
}
