import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from "./events/events-list.component"
import { EventThumbailComponent } from './event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component'

import { EventService } from "./events/shared/event.service"

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ //Services
    EventService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
