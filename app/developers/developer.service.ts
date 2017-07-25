import { IDeveloper } from './developer';

export class DeveloperService {
    getDevelopers(): IDeveloper[]{
        return[
            {
        "Id": 205918428,
        "FirstName": "Dor",
        "LastName": "Alteresku",
        "Phone": "050-3991-998",
        "Mail": "doralteres@gmail.com",
        "Systems": ["icytower", "fifa 2017"],
        "Skills": ["Jenkins", "Angular"],
        "Description": "bla bla"
    },
    {
        "Id": 305462343,
        "FirstName": "Moshe",
        "LastName": "Gilboa",
        "Phone": "054-2370-144",
        "Mail": "mgilboa@outlook.com",
        "Systems": ["SanAndress", "pes 2017"],
        "Skills": ["NodeJS", "Angular"],
        "Description": "bla"
    }
        ];
    }
}