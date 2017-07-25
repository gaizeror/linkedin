"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var developer_service_1 = require("./developer.service");
var DevelopersListComponent = (function () {
    function DevelopersListComponent(DeveloperService) {
        this.pageTitle = 'Developers';
        this.developers = DeveloperService.getDevelopers();
    }
    return DevelopersListComponent;
}());
DevelopersListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/developers/developers-list.component.html',
        providers: [developer_service_1.DeveloperService]
    }),
    __metadata("design:paramtypes", [developer_service_1.DeveloperService])
], DevelopersListComponent);
exports.DevelopersListComponent = DevelopersListComponent;
//# sourceMappingURL=developers-list.component.js.map