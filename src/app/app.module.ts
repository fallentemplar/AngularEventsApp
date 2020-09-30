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
import { Toastr, TOASTR_TOKEN } from './common/toastr.service';

import { appRoutes } from './routes'
import { AuthService } from './user';
import { CollapsibleWellComponent } from './common';

declare let toastr: Toastr;

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
    EventRouteActivator,
    EventsListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    {
      provide: TOASTR_TOKEN, useValue: toastr
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
