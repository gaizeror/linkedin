import { Component } from '@angular/core';

@Component({
    selector : 'li-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>Navigation Bar: </a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/developers']">Developers</a></li>
                    <li><a [routerLink]="['/systems']">Systems</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
    `
})
export class AppComponent {
    public pageTitle: string = 'Welcome';
}
