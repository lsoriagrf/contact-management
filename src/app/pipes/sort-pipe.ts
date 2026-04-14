import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByFavorite',
  pure: false
})
export class Sort implements PipeTransform {
  transform(contacts: any[]): any[] {
    if (!contacts) return [];
    
    return [...contacts].sort((a, b) => {
      if (a.favorito === b.favorito) return 0;
      return a.favorito ? -1 : 1;
    });
  }
}
