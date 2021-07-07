import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: string[], search: string): string[] {
    if(!search){
      return value;
    }
    return value.filter(v => v.toLowerCase().indexOf(search.toLowerCase()) > -1);
  }

}
