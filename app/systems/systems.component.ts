import { Component } from '@angular/core';
import { ISystem } from "./System";
import { SystemService } from "./systems.service";

@Component({
    templateUrl: 'app/systems/systems.component.html'
})
export class SystemsComponent {
    public title : string  = 'Systems';
    systems: ISystem[];

    constructor (systemServics: SystemService){
        this.systems = systemServics.getSystems();
    }
}