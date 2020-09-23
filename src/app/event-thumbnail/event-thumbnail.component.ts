import { Component, Input } from '@angular/core';
import { IEvent } from '../interfaces/IEvent'

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styleUrls: [
        './event-thumbnail.component.css'
    ]
})
export class EventThumbailComponent {
    @Input() event: IEvent
}