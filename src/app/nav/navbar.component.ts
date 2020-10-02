import { Component } from '@angular/core';
import { EventService, ISession } from '../events/shared';
import { AuthService } from '../user';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: [
        './navbar.component.css'
    ]
})
export class NavBarComponent {

    searchTerm: string = "";
    foundSessions: ISession[]

    constructor(public auth: AuthService, private eventService: EventService) {

    }

    searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm).subscribe(
            (sessions: ISession[]) => {
                this.foundSessions = sessions;
            });
    }
}