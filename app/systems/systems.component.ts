import { Component } from '@angular/core';
import { ISystem } from "./System";
import { SystemService } from "./systems.service";

@Component({
    templateUrl: 'app/systems/systems.component.html',
    providers: [SystemService]
})
export class SystemsComponent {
    public title : string  = 'Systems';
    public systems: ISystem[];
    filteredSystems: ISystem[];
    tmpfilteredSystems: ISystem[];

    listFilter: string = '';

   // filterargs = { Name: this.listFilter};
    



    constructor (systemServics: SystemService){
   //     this.getFilteredSystems();
        this.systems = systemServics.getSystems();
        // this.filteredSystems = this.getFilteredSystems();
    }

    getFilteredSystems(){
        // for (var index = 1; index < 3; index++) {
        //     var element = this.systems[index];
        //     if (!this.systems[index].Name.includes(this.listFilter)) {
        //         this.systems[index].show = false;
        //     }
        // }

        // this.systems.forEach(element => {
        //     if (!element.Name.includes(this.listFilter)) {
        //         element.show = false;
        //     }
        // });
    }

    //     for (var index = 0; index < this.systems.length; index++) {
    //         var element = this.systems[index];
    //         if (element.Name.includes(this.listFilter)) {
    //             this.tmpfilteredSystems.push(element);
    //         }
    //     }
    //     return this.tmpfilteredSystems;

    
}