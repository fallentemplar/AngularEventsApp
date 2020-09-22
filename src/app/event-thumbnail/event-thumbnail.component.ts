import { Component, Input } from '@angular/core';
import { IEvent } from '../interfaces/IEvent'

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html'
})
export class EventThumbailComponent {
    @Input() event: IEvent

    someProperty: string = "some value";

    logFoo() {
        console.log("Foo");
    }
}