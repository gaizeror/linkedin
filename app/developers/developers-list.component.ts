import { Component, OnInit } from '@angular/core';
import {DeveloperService} from './developer.service';
import { IDeveloper } from './developer';
@Component({
    templateUrl: 'app/developers/developers-list.component.html',
    providers: [DeveloperService]
})
export class DevelopersListComponent implements OnInit{
    public pageTitle: string = 'Developers';
    developers : any[]; //IDeveloper
    errorMessage: string;

    constructor (private _DeveloperService: DeveloperService){
        //this.developers = DeveloperService.getanyDevelopers();//DeveloperService.getDevelopers();
    }
    listFilter: string = '';

    ngOnInit(): void {
        this._DeveloperService.getanyDevelopers()
                .subscribe(products => this.developers = products,
                           error => this.errorMessage = <any>error);
    }
}
