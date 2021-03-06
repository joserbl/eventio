import {Component, OnInit} from '@angular/core';
import { EventService } from './shared/events.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';
declare let toastr;
@Component({
    // tslint:disable-next-line:component-selector
    template: `
    <div>
    <h1>Your upcoming events</h1>
    <hr/>
    <div class ="row">
    <div class="col-md-5" *ngFor="let event of events">
    <event-thumbnail [event]= "event" (click)= "handleEventCLick(event.name)"></event-thumbnail>
    </div>
    </div>
    `
})

export class EventsListComponent implements OnInit {
    events: IEvent[];

    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        // this.events = this.eventService.getEvents();
        // this.eventService.getEvents().subscribe(events => { this.events = events; });
        this.events = this.route.snapshot.data.events;
    }

    handleEventCLick(name: string) {
        console.log (name);
        this.toastr.displayInfo(name, 'This is a title');
    }

// Demo Code for handling data coming from a child component
// (eventClick)="handleEventClicked($event)" <--Html
// handleEventClicked(data) {
//     console.log('received:', data);
// }

}
