import { IDSkills } from './skills/developerskills'
export interface IDeveloper {
        "Id": number;
        "FirstName": string;
        "LastName": string;
        "Phone": string;
        "Mail": string;
        "Systems": any[];
        "Skills": IDSkills[];
        "Description": string;
}