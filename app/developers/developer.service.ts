import { IDeveloper } from './developer';
import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {DeveloperSkillsService} from './skills/developerskills.service';

@Injectable()

export class DeveloperService {
 
    constructor(private _http: Http, private _DeveloperSkillsService: DeveloperSkillsService) { }
    getFakeDevelopers(): IDeveloper[]{
        return[
            {
        "Id": 205918428,
        "FirstName": "Dor",
        "LastName": "Alteresku",
        "Phone": "050-3991-998",
        "Mail": "doralteres@gmail.com",
        "Systems": ["icytower", "fifa 2017"],
        "Skills": this._DeveloperSkillsService.tmpTest(),
        "Description": "bla bla"
    }
    // {
    //     "Id": 305462343,
    //     "FirstName": "Moshe",
    //     "LastName": "Gilboa",
    //     "Phone": "054-2370-144",
    //     "Mail": "mgilboa@outlook.com",
    //     "Systems": ["SanAndress", "pes 2017"],
    //     //"Skills": ["NodeJS", "Angular"],
    //     "Description": "bla"
    // },
    // {
    //     "Id": 205680614,
    //     "FirstName": "Or",
    //     "LastName": "Gaizer",
    //     "Phone": "050-3991-998",
    //     "Mail": "gaizeror@gmail.com",
    //     "Systems": ["Beta", "fifa 2017"],
    //     //"Skills": ["SaltStack", "MongoDB"],
    //     "Description": ""
    // },
    // {
    //     "Id": 308576388,
    //     "FirstName": "Tomer",
    //     "LastName": "Salton",
    //     "Phone": "054-2370-144",
    //     "Mail": "saltontomer@outlook.com",
    //     "Systems": ["SanAndress", "pes 2017"],
    //     //"Skills": ["EXchange", "MongoDB"],
    //     "Description": "bla"
    // }
        ];
    }
    getDevelopers() : Observable<IDeveloper[]>{
        
        return this._http.get("http://13.94.133.126:3000/list")
        .map((response: Response) => <IDeveloper[]>response.json())
        .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }
        getanyDevelopers() : Observable<any[]>{
        
        return this._http.get("http://13.94.133.126:3000/list")
        .map((response: Response) => <any[]>response.json())
        .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getGitHub() : Observable<any[]>{
        
        return this._http.get("http://13.94.133.126:3000/list")
        .map((response: Response) => <any[]>response.json())
        .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }
        private handleError(error: Response) {
            console.error(error);
            return Observable.throw(error.json().error || 'Server error');
        }

        jsontest(url: string, data: any[]) :void{
            this._http.post(url, JSON.stringify(data), {headers:{'Content-Type': 'application/json'}})
        }


}