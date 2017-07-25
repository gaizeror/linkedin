import { Pipe, PipeTransform } from '@angular/core';
import { ISystem } from "./System";

@Pipe({
    name: 'myfilter',
    pure: false
})
export class SystemFilter implements PipeTransform {
    transform(items: ISystem[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.Name.indexOf(filter) !== -1);
    }
}