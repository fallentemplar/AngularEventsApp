import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/interfaces/IEvent';
import { EventService } from '../shared/event.service'

@Component({
    //No selector because it won't be a child component    
    templateUrl: './event-details.component.html',
    styleUrls: [
        './event-details.component.css'
    ]
})
export class EventDetailsComponent implements OnInit {

    event: IEvent

    constructor(private eventService: EventService) {

    }

    ngOnInit(): void {
        this.event = this.eventService.getEvent(1);
    }
}