import { Routes } from '@angular/router'
import {
    EventListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventsListResolver,
    CreateSessionComponent
} from './events/index'

import { Error404Component } from './errors/404.component'

export const appRoutes: Routes = [
    { path: 'events', component: EventListComponent, resolve: { events: EventsListResolver } },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ["canDeactivateCreateEvent"] },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }

]
