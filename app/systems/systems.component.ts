import { Component } from '@angular/core';
import { ISystem } from "./System";
import { SystemService } from "./systems.service";

@Component({
    selector : 'li-sys',
    templateUrl: 'app/systems/systems.component.html',
    providers: [SystemService],
    
})
export class SystemsComponent {
    public title : string  = 'Systems';
    systems: ISystem[];

    constructor (systemServics: SystemService){
        this.systems = systemServics.getSystems();
    }
}