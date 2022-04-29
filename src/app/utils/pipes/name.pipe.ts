import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: string): unknown {
    let [prenom, nom] = value.split(' '); // jean michel :> ['jean', 'michel']
    //prenom = prenom[0].toUpperCase() + prenom.slice(1);
    prenom = prenom[0].toUpperCase() + prenom.substring(1);
    return `${prenom} ${nom.toUpperCase()}`;
  }

}
