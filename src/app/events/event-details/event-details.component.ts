import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/interfaces/IEvent';
import { EventService } from '../shared/event.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    //No selector because it won't be a child component    
    templateUrl: './event-details.component.html',
    styleUrls: [
        './event-details.component.css'
    ]
})
export class EventDetailsComponent implements OnInit {

    event: IEvent

    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }
}