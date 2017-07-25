import { Component } from '@angular/core';
import { ISystem } from "./System";
import { SystemService } from "./systems.service";

@Component({
    templateUrl: 'app/systems/systems.component.html',
    providers: [SystemService]
})
export class SystemsComponent {
    public title : string  = 'Systems';
    systems: ISystem[];
    listFilter: string = 'cart';

    constructor (systemServics: SystemService){
        this.systems = systemServics.getSystems();
    }
}