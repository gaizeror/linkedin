import { IDSkills } from './developerskills'

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
}
