import {ISystem} from './System'

export class SystemService {
    getSystems() : ISystem[] {
        return [
        {
        "Id": 205918428,
        "Name": "Dev",
        "Team": "DevTeam",
        "Tech": ["MongoDB","Angular"],
        "Plan": "DevPlan" ,
        "Description": "bla bla",
        "show": true

    },
    {
        "Id": 205918428,
        "Name": "Prod",
        "Team": "ProdTeam",
        "Tech": ["SQL","Virtualization"],
        "Plan": "ProdPlan",
        "Description": "bla bla",
        "show": true
    }
    ];
    }
}