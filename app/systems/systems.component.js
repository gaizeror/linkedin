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
var systems_service_1 = require("./systems.service");
var SystemsComponent = (function () {
    function SystemsComponent(systemServics) {
        this.title = 'Systems';
        this.newSysFlag = false;
        this.listFilter = '';
        this.systems = systemServics.getSystems();
    }
    SystemsComponent.prototype.toggleData = function (system) {
        if (!system.show) {
            system.show = true;
        }
        else {
            system.show = false;
        }
    };
    SystemsComponent.prototype.addNewSysToggle = function () {
        if (!this.newSysFlag) {
            this.newSysFlag = true;
        }
        else {
            this.newSysFlag = false;
        }
    };
    SystemsComponent.prototype.addMySystem = function () {
    };
    return SystemsComponent;
}());
SystemsComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/systems/systems.component.html',
        providers: [systems_service_1.SystemService]
    }),
    __metadata("design:paramtypes", [systems_service_1.SystemService])
], SystemsComponent);
exports.SystemsComponent = SystemsComponent;
//# sourceMappingURL=systems.component.js.map