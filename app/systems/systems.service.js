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
                "Team": "Team A",
                "Tech": ["MongoDB", "Angular"],
                "Plan": "DevPlan",
                "Description": "bla bla",
                "show": false,
            },
            {
                "Id": 2,
                "Name": "Prod",
                "Team": "Team B",
                "Tech": ["SQL", "Virtualization"],
                "Plan": "ProdPlan",
                "Description": "bla bla",
                "show": false,
            }
        ];
    };
    return SystemService;
}());
exports.SystemService = SystemService;
//# sourceMappingURL=systems.service.js.map