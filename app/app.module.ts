import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router';
import { Ng2TableModule } from 'ng2-table/ng2-table';

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
    Ng2TableModule

  ],
  declarations: [ AppComponent, DevelopersListComponent, SystemsComponent, WelcomeComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
