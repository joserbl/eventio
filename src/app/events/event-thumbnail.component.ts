import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IEvent} from './shared/event.model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]= "['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date : {{event?.date}} </div>
    <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">Time : {{event?.time}}
    <span *ngSwitchCase="'8:00 am'"> (Early start)</span>
    <span *ngSwitchCase="'10:00 am'"> (Late start)</span>
    <span *ngSwitchDefault> (Normal start)</span>
    </div>
    <div>Price : \${{event?.price}} </div>
    <div *ngIf="event?.location">
    <div>Location : {{event?.location?.address}}, {{event?.location?.city}}, {{event?.location?.country}} </div>
    </div>
    <div [hidden]="!event?.onlineUrl">
    <div>Online Url : {{event?.onlineUrl}} </div>
    </div>
    <div *ngIf="event?.attribExample">
    <div> Practice: {{event?.attribExample}} </div>
    </div>
    </div>
    `,
    styles: [`
        .well div {color: #fff;}
        .thumbnail {min-height: 244px;}
        .pad-left {margin-left: 10px;}
        .green {color: #5eca5e !important;}
        .red {color: #df8319 !important;}
        .blue {color: #2f96b4 !important;}
        .bold {font-weight: bold;}
        `
    ]
})

export class EventThumbnailComponent {
    @Input() event: any;

    getStartTimeClass() {
        if (this.event && this.event.time === '8:00 am') {
            return 'green';
        } else if (this.event && this.event.time === '10:00 am') {
            return 'red';
        }
        return 'blue';
    }

    // Demo code to handle sending data to a parent component
    // @Output() eventClick = new EventEmitter();

    // handleClickMe() {
    //     console.log('An event has been emitted');
    //     this.eventClick.emit(this.event.name);
    //     }
}


