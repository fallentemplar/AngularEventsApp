import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService, IEvent } from '../shared';

@Component({
    selector: 'create-event',
    templateUrl: './create-event.component.html',
    styleUrls: [
        './create-event.component.css'
    ]
})
export class CreateEventComponent {

    isDirty: boolean = false;

    newEvent: IEvent

    constructor(private router: Router, private eventService: EventService) {

    }

    saveEvent(formValues: IEvent) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }

    cancel(): void {
        this.router.navigate(['/events']);
    }
}