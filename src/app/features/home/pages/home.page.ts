import { Component } from '@angular/core';
import {BannerHome} from '../components/banner-home/banner-home';

@Component({
  selector: 'app-home.page',
  imports: [
    BannerHome
  ],
  template: `
    <main>
      <app-banner-home></app-banner-home>
    </main>
  `,
  styles: ``
})
export default class HomePage {

}
