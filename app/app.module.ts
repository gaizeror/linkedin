import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SystemFilter } from './systems/systemfilter.pipe'


import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import {DevelopersListComponent} from './developers/developers-list.component';
import {SystemsComponent} from './systems/systems.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    HttpModule,
    RouterModule.forRoot([
      {path: 'home', component: WelcomeComponent},
      {path: 'developers', component: DevelopersListComponent},
      {path: 'systems', component: SystemsComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
<<<<<<< HEAD
    Ng2TableModule
=======
    FormsModule,
>>>>>>> 7c7eabbd4245e7248e90eeb402ad67c28591bc7a

  ],
  declarations: [ AppComponent, DevelopersListComponent, SystemsComponent, WelcomeComponent,SystemFilter ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
