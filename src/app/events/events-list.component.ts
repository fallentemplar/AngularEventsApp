import { Component, OnInit } from '@angular/core';
import { IEvent } from '../interfaces/IEvent';
import { EventService } from './shared/event.service';


@Component({
    selector: 'events-list',
    templateUrl: "./events-list.component.html"
})
export class EventListComponent implements OnInit {

    events: IEvent[]

    constructor(private eventService: EventService) {
        
    }

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }
}