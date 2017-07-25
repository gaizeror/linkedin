import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import {DevelopersListComponent} from './developers/developers-list.component';
import {SystemsComponent} from './systems/systems.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, DevelopersListComponent, SystemsComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
