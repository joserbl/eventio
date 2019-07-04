import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date : {{event?.date}} </div>
    <div>Time : {{event?.time}} </div>
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
        `
    ]
})

export class EventThumbnailComponent {
    @Input() event: any;

    logFoo() {
        console.log('foo');
    }

    // Demo code to handle sending data to a parent component
    // @Output() eventClick = new EventEmitter();

    // handleClickMe() {
    //     console.log('An event has been emitted');
    //     this.eventClick.emit(this.event.name);
    //     }
}


