import { Pipe, PipeTransform } from '@angular/core';
import { IDeveloper } from './developer';

@Pipe({
    name: 'mydfilter',
    pure: false
})
export class DeveloperFilter implements PipeTransform {
    transform(items: IDeveloper[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        // if(filter.charAt(0) === '#'){
        //     filter=filter.substr(1);
        //         return items.filter(
        //             item=> ((item.Skills.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1 ))
        //         );
        //     }
        return items.filter(
            item => ((item.FirstName+" "+item.LastName).toLowerCase().indexOf(filter.toLowerCase()) !== -1)|| 
            (item.Id.toString().indexOf(filter) !== -1)||
            (item.Phone.indexOf(filter) !== -1)||
            (item.Mail.indexOf(filter) !== -1)
    );
    }
}