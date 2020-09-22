import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import {EventListComponent} from "./events/events-list.component"
import { EventThumbailComponent } from './event-thumbnail/event-thumbnail.component';
 
@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
