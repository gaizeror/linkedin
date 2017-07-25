import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/systems/systems.component.html'
})
export class SystemsComponent {
    public title : string  = 'hello moish';
    systems : any [] = [
        {
        "Id": 205918428,
        "Name": "Dev",
        "Team": "DevTeam",
        "Tech": ["MongoDB","Angular"],
        "Plan": "DevPlan",
        "Description": "bla bla"
    },
    {
        "Id": 205918428,
        "Name": "Prod",
        "Team": "ProdTeam",
        "Tech": ["SQL","Virtualization"],
        "Plan": "ProdPlan",
        "Description": "bla bla"
    }
    ];
}