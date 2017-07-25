"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    return DeveloperSkillsService;
}());
exports.DeveloperSkillsService = DeveloperSkillsService;
//# sourceMappingURL=developerskills.service.js.map