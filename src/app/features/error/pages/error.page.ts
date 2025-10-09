import { Component } from '@angular/core';
import {Error} from '../components/error/error';

@Component({
  selector: 'app-error.page',
  imports: [
    Error
  ],
  template: `
    <main>
      <app-error></app-error>
    </main>
  `,
  styles: ``
})
export default class ErrorPage {

}
