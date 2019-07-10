import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    template: `
    <h1> New Event </h1>
    <hr>
    <div class="col-md-6">
        <h3>[Happy useless placeholder :D]</h3>
        <br>
        <br>
        <button type="submit" class="btn btn-success">Save</button>
        <span></span>
        <button type="button" class="btn btn-primary" (click)= "cancel()">Cancel</button>
        </div>
    `

})

export class CreateEventComponent {
    isDirty = true;
    constructor(private router: Router) {

    }
    // Example of routing through code
    cancel() {
        this.router.navigate(['/events']);
    }


}
