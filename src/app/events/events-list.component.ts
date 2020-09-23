import { Component, OnInit } from '@angular/core';
import { IEvent } from '../interfaces/IEvent';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
    templateUrl: "./events-list.component.html"
})
export class EventListComponent implements OnInit {

    events: IEvent[]
    toastrService: ToastrService

    constructor(private eventService: EventService, toastrService: ToastrService) {
        this.toastrService = toastrService;
    }

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName: string) {
        this.toastrService.success(eventName, "Title");
    }
}