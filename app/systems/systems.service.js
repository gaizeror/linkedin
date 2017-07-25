"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SystemService = (function () {
    function SystemService() {
    }
    SystemService.prototype.getSystems = function () {
        return [
            {
                "Id": 1,
                "Name": "Jenkins",
                "Team": "Team A",
                "Tech": ["MongoDB", "Angular"],
                "Plan": "DevPlan",
                "Description": "bla bla",
                "show": false,
            },
            {
                "Id": 2,
                "Name": "Git",
                "Team": "Team B",
                "Tech": ["SQL", "Virtualization"],
                "Plan": "ProdPlan",
                "Description": "bla bla",
                "show": false,
            },
            {
                "Id": 3,
                "Name": "TFS",
                "Team": "Team C",
                "Tech": ["SQL", "Virtualization"],
                "Plan": "ProdPlan",
                "Description": "bla bla",
                "show": false,
            },
            {
                "Id": 4,
                "Name": "Artifactory",
                "Team": "Team D",
                "Tech": ["SQL", "Virtualization"],
                "Plan": "ProdPlan",
                "Description": "bla bla",
                "show": false,
            },
        ];
    };
    return SystemService;
}());
exports.SystemService = SystemService;
//# sourceMappingURL=systems.service.js.map