import { Component } from '@angular/core';

@Component({
    selector : 'li-app',
    templateUrl: 'app/home/welcome.component.html'
})
export class AppComponent {
    public pageTitle: string = 'Welcome';
}
