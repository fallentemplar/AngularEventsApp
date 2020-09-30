import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventsAppComponent } from './events-app.component';

import {
  EventListComponent,
  EventThumbailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventsListResolver,
  EventRouteActivator,
  CreateSessionComponent,
  SessionListComponent, 
  DurationPipe
} from './events/index'

import { Error404Component } from './errors/404.component'
import { NavBarComponent } from './nav/navbar.component'
import { ToastrService } from './common/toastr.service';

import { appRoutes } from './routes'
import { AuthService } from './user';
import { CollapsibleWellComponent } from './common';


@NgModule({
  declarations: [
    EventDetailsComponent,
    EventsAppComponent,
    EventListComponent,
    EventThumbailComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    NavBarComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ //Services
    EventService,
    ToastrService,
    EventRouteActivator,
    EventsListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm("You have not saved this event, do you really want to cancel?");
  return true;
}
