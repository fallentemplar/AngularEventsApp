import { Component } from '@angular/core';
import { IEvent } from '../interfaces/IEvent';


@Component({
    selector: 'events-list',
    templateUrl: "./events-list.component.html"
})
export class EventListComponent {
    eventList: IEvent[] = [{
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
    },
    {
        id: 2,
        name: 'Angular Forever',
        date: '22/09/2020',
        time: '17:22 pm',
        price: 1031.42,
        imageUrl: 'assets/images/angularconnect-shield.png',
        location: {
            address: '2092 Evergreen Terrace',
            city: 'Springfield',
            country: 'Canada'
        }
    }

];
    
}