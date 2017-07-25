import {ISystem} from './System'

export class SystemService {
    getSystems() : ISystem[] {
        return [
        {
        "Id": 1,
        "Name": "Dev",
        "Team": "DevTeam",
        "Tech": ["MongoDB","Angular"],
        "Plan": "DevPlan" ,
        "Description": "bla bla",
    },
    {
        "Id": 2,
        "Name": "Prod",
        "Team": "ProdTeam",
        "Tech": ["SQL","Virtualization"],
        "Plan": "ProdPlan",
        "Description": "bla bla",
    }
    ];
    }
}