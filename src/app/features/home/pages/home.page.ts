import { Component } from '@angular/core';
import {BannerHome} from '../components/banner-home/banner-home';
import {CarouselHome} from '../components/carousel-home/carousel-home';
import {SetCarouselHome} from '../components/set-carousel-home/set-carousel-home';
import {PresentationPromotion} from '../components/presentation-promotion/presentation-promotion';

@Component({
  selector: 'app-home.page',
  imports: [
    BannerHome,
    CarouselHome,
    SetCarouselHome,
    PresentationPromotion
  ],
  template: `
    <main>
      <app-banner-home></app-banner-home>
      <app-carousel-home></app-carousel-home>
      <app-set-carousel-home></app-set-carousel-home>
      <app-presentation-promotion></app-presentation-promotion>
    </main>
  `,
  styles: ``
})
export default class HomePage {

}
