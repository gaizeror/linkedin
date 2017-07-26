import { Component, OnInit } from '@angular/core';
import {DeveloperService} from './developer.service';
import { IDeveloper } from './developer';
import { Observable } from 'rxjs/Observable';
import {DeveloperSkillsService} from './skills/developerskills.service';
@Component({
    templateUrl: 'app/developers/developers-list.component.html',
    styleUrls: ['app/developers/developers-list.css'],
    providers: [DeveloperService, DeveloperSkillsService]
})
export class DevelopersListComponent{
    public pageTitle: string = 'Developers';
    developers : IDeveloper[]; //IDeveloper
    errorMessage: string;

    constructor (private _DeveloperService: DeveloperService){
    //let anyobject : Observable<any[]> = this._DeveloperService.getanyDevelopers();//DeveloperService.getDevelopers();
    this.developers=this._DeveloperService.getFakeDevelopers();
}
    listFilter: string = '';
    // ngOnInit(): void {
    //     this._DeveloperService.getGitHub()
    //             .subscribe(products => this.developers = products,
    //                        error => this.errorMessage = <any>error);
    // }
    tabClick(str: string): void{
        this.listFilter="#"+str;
        //console.log(this._DeveloperService.postJson({"theid":432438888888888888888825553366,"Firstname":"ljnljn","Lastname":"ljnljn","Phone":"nlj","Mail":"nl","Systems":"nl ","Description":"fds","Skills":[{"_id":"ddd","Endorse":0},{"_id":"lll","Endorse":0}]}));
        this._DeveloperService.emtybody();
    }
    
}
