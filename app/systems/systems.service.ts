import {ISystem} from './System'

export class SystemService {
    getSystems() : ISystem[] {
        return [
        {
        "Id": 1,
        "Name": "Jenkins",
        "Team": "Team A",
        "Tech": ["MongoDB","Angular"],
        "Plan": "DevPlan" ,
        "Description": "bla bla",
        "show":false,
    },
    {
        "Id": 2,
        "Name": "Git",
        "Team": "Team B",
        "Tech": ["SQL","Virtualization"],
        "Plan": "ProdPlan",
        "Description": "bla bla",
        "show": false,
    },
        {
        "Id": 3,
        "Name": "TFS",
        "Team": "Team C",
        "Tech": ["SQL","Virtualization"],
        "Plan": "ProdPlan",
        "Description": "bla bla",
        "show": false,
    },
        {
        "Id": 4,
        "Name": "Artifactory",
        "Team": "Team D",
        "Tech": ["SQL","Virtualization"],
        "Plan": "ProdPlan",
        "Description": "bla bla",
        "show": false,
    },
    ];
    }
}