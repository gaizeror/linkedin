import {Injectable} from "@angular/core";
import { IDSkills } from './developerskills';

@Injectable()
export class DeveloperSkillsService {
    private skills: IDSkills[]=
        [
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
                "Id": 32356787,
                "Skill": "NodeJS",
                "Endorse": 4
            },
            {
                "Id": 32356787,
                "Skill": "Angular",
                "Endorse": 8
            },
            {
                "Id": 28744323,
                "Skill": "Angular",
                "Endorse": 4
            },
            {
                "Id": 28744323,
                "Skill": "SaltStack",
                "Endorse": 6
            },
            {
                "Id": 313765898,
                "Skill": "Angular",
                "Endorse": 4
            },
            {
                "Id": 313765898,
                "Skill": "Exchange",
                "Endorse": 5
            },
            {
                "Id": 24355633,
                "Skill": "Angular",
                "Endorse": 4
            },
            {
                "Id": 24355633,
                "Skill": "MongoDB",
                "Endorse": 2
            },
            {
                "Id": 24355633,
                "Skill": "Jenkins",
                "Endorse": 4
            },
            {
                "Id": 20766443,
                "Skill": "MongoDB",
                "Endorse": 2
            },
            {
                "Id": 20766443,
                "Skill": "NodeJS",
                "Endorse": 4
            }
        ];

    findDevSkills(id: number): IDSkills[]{
        return this.skills.filter(
            skill => (skill.Id==id)
        );
    }
    endorceSkill(id: number, skillValue: string): void{
        this.findDevSkills(id).forEach(skill => {
            if(skill.Skill.match(skillValue)){
                skill.Endorse++;
            }
        });
    }

    tmpTest(): IDSkills[]{
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
        ]
        ;
    }
}
