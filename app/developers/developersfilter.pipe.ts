import { Pipe, PipeTransform } from '@angular/core';
import { IDeveloper } from './developer';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class DeveloperFilter implements PipeTransform {
    transform(items: IDeveloper[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.FirstName.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }
}