import { Component } from '@angular/core';

@Component({
    selector : 'li-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>
                <img src="./app/assets/images/Logo_li.png" 
                 class="img-responsive center-block"
                 style="max-height:75px;padding-bottom:50px"/>
                </a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/home']">Home</a></li>
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
