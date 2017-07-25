import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {DevelopersComponent} from './app/developer/developers.component';
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, DevelopersComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
