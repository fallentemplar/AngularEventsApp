import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { JQUERY_TOKEN } from './jQuery.service';

@Component({
    selector: 'simple-modal',
    templateUrl: './simple-modal.component.html'
})
export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @ViewChild('modalContainer') containerEl: ElementRef;

    constructor(@Inject(JQUERY_TOKEN) private $: any) {

    }

    closeModal() {
        this.$(this.containerEl.nativeElement).modal('hide');
    }
}