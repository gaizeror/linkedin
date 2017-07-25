import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import {DevelopersListComponent} from './developers/developers-list.component';
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, DevelopersListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
