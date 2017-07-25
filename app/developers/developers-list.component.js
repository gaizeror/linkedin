"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DevelopersListComponent = (function () {
    function DevelopersListComponent() {
        this.pageTitle = 'Developers';
        this.developers = [
            {
                "Id": 205918428,
                "FirstName": "Dor",
                "LastName": "Alteresku",
                "Phone": "050-3991-998",
                "Mail": "doralteres@gmail.com",
                "Systems": ["icytower", "fifa 2017"],
                "Skills": ["Jenkins", "Angular"],
                "Description": "bla bla"
            },
            {
                "Id": 305462343,
                "FirstName": "Moshe",
                "LastName": "Gilboa",
                "Phone": "054-2370-144",
                "Mail": "mgilboa@outlook.com",
                "Systems": ["SanAndress", "pes 2017"],
                "Skills": ["NodeJS", "Angular"],
                "Description": "bla"
            }
        ];
    }
    return DevelopersListComponent;
}());
DevelopersListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/developers/developers-list.component.html'
    })
], DevelopersListComponent);
exports.DevelopersListComponent = DevelopersListComponent;
//# sourceMappingURL=developers-list.component.js.map