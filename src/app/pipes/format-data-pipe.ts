import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatData',
})

export class FormatDataPipe implements PipeTransform {
  transform(value: string, type: 'camel' | 'lower'): string {
    if (!value) return '';

    if (type === 'lower') {
      return value.toLowerCase().replace(/\s+/g, '');
    }

    if (type === 'camel') {
    
      return value
        .trim()
        .split(' ')
        .filter(word => word.length > 0)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }

    return value;
  }
}
