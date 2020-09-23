import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'create-event',
    templateUrl: './create-event.component.html'
})
export class CreateEventComponent {

    isDirty: boolean = false;
    constructor(private router: Router) {

    }
    cancel(): void {
        this.router.navigate(['/events']);
    }
}