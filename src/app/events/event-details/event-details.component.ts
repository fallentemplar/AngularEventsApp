import { Component, OnInit } from '@angular/core';
import { IEvent, ISession } from '../shared/event.model';
import { EventService } from '../shared/event.service'
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
    //No selector because it won't be a child component    
    templateUrl: './event-details.component.html',
    styleUrls: [
        './event-details.component.css'
    ]
})
export class EventDetailsComponent implements OnInit {

    event: IEvent
    addMode: boolean
    filterBy: string = 'all';
    sortBy: string = 'votes';

    constructor(private eventService: EventService, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.event = this.eventService.getEvent(Number(params['id']))
            this.addMode = false;
        });
    }

    addSession(): void {
        this.addMode = true
    }

    saveNewSession(session: ISession) {
        this.addMode = false;
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
    }

    cancelAddSession(): void {
        this.addMode = false;
    }

    filter(selectedFilter: string) {

    }

}