import { Pipe, PipeTransform } from '@angular/core';
import { Arme } from './equipement/orest/arme.interface';

@Pipe({
  name: 'find'
})
export class FindPipe implements PipeTransform {

  transform(armes: Arme[], searchText: string): Arme[] {
    if (!armes) { return []; }
    armes.forEach(arme  => {
     if ( searchText === arme.nom ) {return arme; }
   });
   }
}
