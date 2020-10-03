import { Routes } from '@angular/router';
import {
    EventListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventsListResolver,
    CreateSessionComponent, EventResolver
} from './events/index';

import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [
    { path: 'events', component: EventListComponent, resolve: { events: EventsListResolver } },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    // { path: 'events/session/new', component: CreateSessionComponent },
    { path: 'user', loadChildren: () => import('./user/user.module').then(module => module.UserModule) }

];
