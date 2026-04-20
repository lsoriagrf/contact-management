import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByFavorite',
  pure: false
})
export class Sort implements PipeTransform {
  transform(contacts: any[]): any[] {
    if (!contacts) return [];
    
    return [...contacts].sort((a, b) => {
      if (a.favorite === b.favorite) return 0;
      return a.favorite ? -1 : 1;
    });
  }
}

