import { Component } from '@angular/core';
import { ISystem } from "./System";
import { SystemService } from "./systems.service";

@Component({
<<<<<<< HEAD
    templateUrl: 'app/systems/systems.component.html'
=======
    selector : 'li-sys',
    templateUrl: 'app/systems/systems.component.html',
    providers: [SystemService],
    
>>>>>>> ef3e151bef8b32311ef1556b23a634362d08c761
})
export class SystemsComponent {
    public title : string  = 'Systems';
    systems: ISystem[];

    constructor (systemServics: SystemService){
        this.systems = systemServics.getSystems();
    }
}