"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DeveloperSkillsService = (function () {
    function DeveloperSkillsService() {
        this.skills = [
            {
                "Id": 205918428,
                "Skill": "Jenkins",
                "Endorse": 8
            },
            {
                "Id": 205918428,
                "Skill": "Angular",
                "Endorse": 4
            },
            {
                "Id": 205918428,
                "Skill": "TypeScript",
                "Endorse": 1
            },
            {
                "Id": 305462343,
                "Skill": "NodeJS",
                "Endorse": 4
            },
            {
                "Id": 305462343,
                "Skill": "Angular",
                "Endorse": 8
            },
            {
                "Id": 205918428,
                "Skill": "Angular",
                "Endorse": 4
            },
            {
                "Id": 205680614,
                "Skill": "SaltStack",
                "Endorse": 6
            },
            {
                "Id": 205680614,
                "Skill": "Angular",
                "Endorse": 4
            },
            {
                "Id": 308576388,
                "Skill": "Exchange",
                "Endorse": 5
            },
            {
                "Id": 308576388,
                "Skill": "Angular",
                "Endorse": 4
            },
            {
                "Id": 308576388,
                "Skill": "MongoDB",
                "Endorse": 2
            },
            {
                "Id": 205680614,
                "Skill": "Angular",
                "Endorse": 4
            }
        ];
    }
    DeveloperSkillsService.prototype.findDevSkills = function (id) {
        return this.skills.filter(function (skill) { return (skill.Id == id); });
    };
    DeveloperSkillsService.prototype.endorceSkill = function (id, skillValue) {
        this.findDevSkills(id).forEach(function (skill) {
            if (skill.Skill.match(skillValue)) {
                skill.Endorse++;
            }
        });
    };
    DeveloperSkillsService.prototype.tmpTest = function () {
        return [
            {
                "Id": 308576388,
                "Skill": "Angular",
                "Endorse": 4
            },
            {
                "Id": 308576388,
                "Skill": "MongoDB",
                "Endorse": 2
            },
            {
                "Id": 205680614,
                "Skill": "Angular",
                "Endorse": 4
            }
        ];
    };
    return DeveloperSkillsService;
}());
DeveloperSkillsService = __decorate([
    core_1.Injectable()
], DeveloperSkillsService);
exports.DeveloperSkillsService = DeveloperSkillsService;
//# sourceMappingURL=developerskills.service.js.map