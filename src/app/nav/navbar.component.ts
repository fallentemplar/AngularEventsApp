import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService, IEvent, ISession } from '../events/shared';
import { AuthService } from '../user';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: [
        './navbar.component.css'
    ]
})
export class NavBarComponent implements OnInit {

    searchTerm: string = "";
    foundSessions: ISession[]
    availableEvents: IEvent[];

    constructor(public auth: AuthService, private eventService: EventService, private route: ActivatedRoute) {

    }
    ngOnInit(): void {
        this.getEventList();
    }

    searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm).subscribe(
            (sessions: ISession[]) => {
                this.foundSessions = sessions;
            });
    }

    getEventList() {
        this.eventService.getEvents().subscribe(events => {
            this.availableEvents = events;
        })
    }
}