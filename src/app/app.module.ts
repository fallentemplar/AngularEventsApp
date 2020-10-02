import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { EventsAppComponent } from './events-app.component';
import { Error404Component } from './errors/404.component'
import { NavBarComponent } from './nav/navbar.component'
import { CollapsibleWellComponent, JQUERY_TOKEN, ModalTriggerDirective, SimpleModalComponent, Toastr, TOASTR_TOKEN } from './common';
import {
  EventListComponent,
  EventThumbailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventsListResolver,
  //EventRouteActivator,
  EventResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent, LocationValidator
} from './events/index'
import { appRoutes } from './routes'
import { AuthService } from './user';
import { VoterService } from './events/event-details/voter.service';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

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
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ //Services
    EventService,
    //EventRouteActivator,
    EventsListResolver,
    AuthService,
    VoterService,
    EventResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    {
      provide: TOASTR_TOKEN, useValue: toastr
    },
    {
      provide: JQUERY_TOKEN, useValue: jQuery
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
