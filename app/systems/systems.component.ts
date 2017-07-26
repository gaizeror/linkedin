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

    public newSysFlag: boolean = false;

    listFilter: string = '';    

    constructor (systemServics: SystemService){
        this.systems = systemServics.getSystems();
    }
    
    toggleData(system: ISystem){
        if (!system.show){
            system.show = true;
        }
        else{
            system.show = false;
        }
    }
    addNewSysToggle(){
        if (!this.newSysFlag){
            this.newSysFlag = true;
        }
        else{
            this.newSysFlag = false;
        }
    }

    // addMySystem(){
    // }
}