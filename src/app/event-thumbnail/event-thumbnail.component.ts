import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEvent } from '../interfaces/IEvent'

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html'
})
export class EventThumbailComponent {
    @Input() event: IEvent
    @Output() eventClick = new EventEmitter();

    handleClickMe() {
        this.eventClick.emit(this.event.name);
    }
}