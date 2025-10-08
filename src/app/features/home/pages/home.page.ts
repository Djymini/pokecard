import { Component } from '@angular/core';
import {BannerHome} from '../components/banner-home/banner-home';
import {CarouselHome} from '../components/carousel-home/carousel-home';

@Component({
  selector: 'app-home.page',
  imports: [
    BannerHome,
    CarouselHome
  ],
  template: `
    <main>
      <app-banner-home></app-banner-home>
      <app-carousel-home></app-carousel-home>
    </main>
  `,
  styles: ``
})
export default class HomePage {

}
