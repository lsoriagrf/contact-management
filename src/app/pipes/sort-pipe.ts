import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../models/contact.model';

@Pipe({
  name: 'sortByFavorite',
  pure: false
})
export class Sort implements PipeTransform {
  transform(contacts: Contact[] | null | undefined): Contact[] {
    if (!contacts) return [];
    
    return [...contacts].sort((a, b) => {
      if (a.favorite === b.favorite) return 0;
      return a.favorite ? -1 : 1;
    });
  }
}

