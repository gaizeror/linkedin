import { Component } from '@angular/core';
import {DeveloperService} from './developer.service';
import { IDeveloper } from './developer';
@Component({
    templateUrl: 'app/developers/developers-list.component.html',
    providers: [DeveloperService]
})
export class DevelopersListComponent {
    public pageTitle: string = 'Developers';
    developers : IDeveloper[];
    constructor (DeveloperService: DeveloperService){
        this.developers = DeveloperService.getDevelopers();
    }
}
