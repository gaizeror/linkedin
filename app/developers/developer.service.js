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
var developerskills_service_1 = require("./skills/developerskills.service");
var DeveloperService = (function () {
    function DeveloperService(_http, _DeveloperSkillsService) {
        this._http = _http;
        this._DeveloperSkillsService = _DeveloperSkillsService;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
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
                "Skills": this._DeveloperSkillsService.findDevSkills(205918428),
                "Description": "bla bla"
            },
            {
                "Id": 32356787,
                "FirstName": "Moish",
                "LastName": "Gilboa",
                "Phone": "050-3441-321",
                "Mail": "mgilboa@gmail.com",
                "Systems": ["Counter Strike", "Pes 2002"],
                "Skills": this._DeveloperSkillsService.findDevSkills(32356787),
                "Description": "bla bla"
            },
            {
                "Id": 28744323,
                "FirstName": "Or",
                "LastName": "Gaizer",
                "Phone": "052-1123-545",
                "Mail": "gaizeror@gmail.com",
                "Systems": ["Beta", "NBA2K"],
                "Skills": this._DeveloperSkillsService.findDevSkills(28744323),
                "Description": "bla bla"
            },
            {
                "Id": 313765898,
                "FirstName": "Tomer",
                "LastName": "Salton",
                "Phone": "050-1514-877",
                "Mail": "saltontomer@outlook.com",
                "Systems": ["icytower", "fifa 2017"],
                "Skills": this._DeveloperSkillsService.findDevSkills(313765898),
                "Description": "bla bla"
            },
            {
                "Id": 24355633,
                "FirstName": "Aviv",
                "LastName": "Israeli",
                "Phone": "050-1146-454",
                "Mail": "avivis@gmail.com",
                "Systems": ["Beta", "NBA2K"],
                "Skills": this._DeveloperSkillsService.findDevSkills(24355633),
                "Description": "bla bla"
            },
            {
                "Id": 20766443,
                "FirstName": "Ilana",
                "LastName": "Mizrahi",
                "Phone": "050-2322-764",
                "Mail": "MizIla@walla.com",
                "Systems": ["GTA", "WWE"],
                "Skills": this._DeveloperSkillsService.findDevSkills(20766443),
                "Description": "bla bla"
            },
        ];
    };
    DeveloperService.prototype.getDevelopers = function () {
        return this._http.get("http://13.94.133.126:3000/list")
            .map(this.extractData)
            .catch(this.handleError);
    };
    DeveloperService.prototype.extractData = function (res) {
        var body = res.json();
        return (body.data || []);
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
    DeveloperService.prototype.postJson = function (data) {
        return this._http.post("http://13.94.133.126:3000/newdev", null, { headers: this.headers, body: JSON.stringify(data) }).map(function (res) { return res.json(); });
    };
    ;
    DeveloperService.prototype.emtybody = function () {
        return this._http.post("http://13.94.133.126:3000/newdev", null);
    };
    return DeveloperService;
}());
DeveloperService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, developerskills_service_1.DeveloperSkillsService])
], DeveloperService);
exports.DeveloperService = DeveloperService;
//# sourceMappingURL=developer.service.js.map