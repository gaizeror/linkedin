"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SystemService = (function () {
    function SystemService() {
    }
    SystemService.prototype.getSystems = function () {
        return [
            {
                "Id": 1,
                "Name": "Dev",
                "Team": "DevTeam",
                "Tech": ["MongoDB", "Angular"],
                "Plan": "DevPlan",
                "Description": "bla bla",
            },
            {
                "Id": 2,
                "Name": "Prod",
                "Team": "ProdTeam",
                "Tech": ["SQL", "Virtualization"],
                "Plan": "ProdPlan",
                "Description": "bla bla",
            }
        ];
    };
    return SystemService;
}());
exports.SystemService = SystemService;
//# sourceMappingURL=systems.service.js.map