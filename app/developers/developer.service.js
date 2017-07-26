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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var DeveloperService = (function () {
    function DeveloperService(_http) {
        this._http = _http;
    }
    DeveloperService.prototype.getFakeDevelopers = function () {
        return [
            {
                "Id": 205918428,
                "FirstName": "Dor",
                "LastName": "Alteresku",
                "Phone": "050-3991-998",
                "Mail": "doralteres@gmail.com",
                "Systems": ["icytower", "fifa 2017"],
                //"Skills": ["Jenkins", "Angular"],
                "Description": "bla bla"
            },
            {
                "Id": 305462343,
                "FirstName": "Moshe",
                "LastName": "Gilboa",
                "Phone": "054-2370-144",
                "Mail": "mgilboa@outlook.com",
                "Systems": ["SanAndress", "pes 2017"],
                //"Skills": ["NodeJS", "Angular"],
                "Description": "bla"
            },
            {
                "Id": 205680614,
                "FirstName": "Or",
                "LastName": "Gaizer",
                "Phone": "050-3991-998",
                "Mail": "gaizeror@gmail.com",
                "Systems": ["Beta", "fifa 2017"],
                //"Skills": ["SaltStack", "MongoDB"],
                "Description": ""
            },
            {
                "Id": 308576388,
                "FirstName": "Tomer",
                "LastName": "Salton",
                "Phone": "054-2370-144",
                "Mail": "saltontomer@outlook.com",
                "Systems": ["SanAndress", "pes 2017"],
                //"Skills": ["EXchange", "MongoDB"],
                "Description": "bla"
            }
        ];
    };
    DeveloperService.prototype.getDevelopers = function () {
        return this._http.get("http://13.94.133.126:3000/list")
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    DeveloperService.prototype.getanyDevelopers = function () {
        return this._http.get("http://13.94.133.126:3000/list")
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    DeveloperService.prototype.getGitHub = function () {
        return this._http.get("http://13.94.133.126:3000/list")
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    DeveloperService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return DeveloperService;
}());
DeveloperService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DeveloperService);
exports.DeveloperService = DeveloperService;
//# sourceMappingURL=developer.service.js.map