import { IDSkills } from './skills/developerskills'
export interface IDeveloper {
        "Id": number;
        "FirstName": string;
        "LastName": string;
        "Phone": string;
        "Mail": string;
        "Systems": string[];
        "Skills": IDSkills[];
        "Description": string;
}