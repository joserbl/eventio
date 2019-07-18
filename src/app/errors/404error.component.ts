import { Component } from '@angular/core';


@Component({
  template: `
    <h2 class="errorMessage">The event you are trying to find doesn't exist.</h2>
  `,
  styles: [`
    .errorMessage {
      margin-top:150px;
      font-size: 130px;
      text-align: center;
      color: red;
    }`]
})
export class Error404Component {
  constructor() {

  }

}
