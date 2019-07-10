import {Component, OnInit} from '@angular/core';
import { EventService } from '../shared/events.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    // tslint:disable-next-line:component-selector
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left:20px; pading-right:20px;}
        .event-image {height: 100px;}
    `]
  })
  export class EventDetailsComponent implements OnInit {
      event: any;
      constructor(private eventService: EventService, private route: ActivatedRoute) {

      }


    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
    }
  }
