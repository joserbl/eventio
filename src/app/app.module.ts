// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

// Components
import { EventsAppComponent } from './events-app.component';
import {EventsListComponent} from './events/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavBarComponent} from './nav/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404error.component';

// Services
import { EventService } from './events/shared/events.service';
import { ToastrService } from './common/toastr.service';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list.resolver.service';

// Routes
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,
              ToastrService, 
              EventRouteActivator,
              { provide: 'canDeactivateCreateEvent',
               useValue: checkIfDirty},
               EventListResolver],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

// Temporary declaration of this function to demonstrate the canDeactivate route guard
export function checkIfDirty(component: CreateEventComponent) {
  if (component.isDirty) {
      return window.confirm('You have unsaved changes, if you leave the page, they will be lost. Are you sure?');
  }
  return true;
}

