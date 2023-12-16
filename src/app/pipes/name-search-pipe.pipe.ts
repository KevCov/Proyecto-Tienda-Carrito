import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'nameSearchPipe'
})
export class NameSearchPipePipe implements PipeTransform {
  transform(items:Product[], nameSearch:string): Product[] {
    if(!items) return [];
    if(!nameSearch) return items;

    nameSearch = nameSearch.toLowerCase();

    return items.filter( (item:Product) => {
      return item.title.toLowerCase().includes(nameSearch);
    })
  }
}
