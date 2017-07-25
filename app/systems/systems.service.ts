import {ISystem} from './System'

export class SystemService {
    getSystems() : ISystem[] {
        return [
        {
        "Id": 1,
        "Name": "Dev",
        "Team": "Team A",
        "Tech": ["MongoDB","Angular"],
        "Plan": "DevPlan" ,
        "Description": "bla bla",
        "show":false,
    },
    {
        "Id": 2,
        "Name": "Prod",
        "Team": "Team B",
        "Tech": ["SQL","Virtualization"],
        "Plan": "ProdPlan",
        "Description": "bla bla",
        "show": false,
    }
    ];
    }
}