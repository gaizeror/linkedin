import { IDeveloper } from './developer';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
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
    }
    getDevelopers (): Observable<IDeveloper[]> {
        return this._http.get("http://13.94.133.126:3000/list")
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    private extractData(res: Response): IDeveloper[] {
    let body = res.json();
    return (body.data || []) as IDeveloper[];
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

        headers = new Headers({
    'Content-Type': 'application/json'
    });

    postJson( data: any): Observable<Response> {
        return this._http.post(
        "http://13.94.133.126:3000/newdev",
        null,
        {headers: this.headers, body:JSON.stringify(data)}
    ).map((res: Response) => res.json());
  };
emtybody() :Observable<Response> {
    return this._http.post("http://13.94.133.126:3000/newdev", null);
}


}