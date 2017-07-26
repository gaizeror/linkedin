import { Component, OnInit } from '@angular/core';
import {DeveloperService} from './developer.service';
import { IDeveloper } from './developer';
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
    this.developers = this._DeveloperService.getFakeDevelopers();//DeveloperService.getDevelopers();
    }
    listFilter: string = '';
    // ngOnInit(): void {
    //     this._DeveloperService.getGitHub()
    //             .subscribe(products => this.developers = products,
    //                        error => this.errorMessage = <any>error);
    // }
    tabClick(str: string): void{
        this.listFilter="#"+str;
    }
}
