import { Component } from '@angular/core';
import { IEvent } from '../interfaces/IEvent';


@Component({
    selector: 'events-list',
    templateUrl: "./events-list.component.html"
})
export class EventListComponent {
    event1: IEvent = {
        id: 1,
        name: 'Angular Connect',
        date: '22/09/2020',
        time: '17:22 pm',
        price: 1031.42,
        imageUrl: 'assets/images/angularconnect-shield.png',
        location: {
            address: 'Calle falsa 123',
            city: 'Springfield',
            country: 'Gilead'
        }
    }

    handleEventClicked(data: string) {
        console.log("Received: " + data);
    }

}