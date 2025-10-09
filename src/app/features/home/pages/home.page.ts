import {Component, inject, OnInit} from '@angular/core';
import {BannerHome} from '../components/banner-home/banner-home';
import {CarouselHome} from '../components/carousel-home/carousel-home';
import {SetCarouselHome} from '../components/set-carousel-home/set-carousel-home';
import {PresentationPromotion} from '../components/presentation-promotion/presentation-promotion';
import {SetDetailModel, setDetailPlaceholder} from '../../../share/models/set-detail.model';
import {ActivatedRoute} from '@angular/router';
import {CardModel} from '../../../share/models/card.model';
import {SetModel} from '../../../share/models/set.model';
import {ProductModel} from '../../product/models/productModel';

@Component({
  selector: 'app-home.page',
  imports: [
    BannerHome,
    CarouselHome,
    SetCarouselHome,
    PresentationPromotion,
  ],
  template: `
    <main>
      <app-banner-home [bannerSet]="bannerSet"></app-banner-home>
      <app-carousel-home [homeCard]="homeCard"></app-carousel-home>
      <app-set-carousel-home [homeSet]="homeSet"></app-set-carousel-home>
      <app-presentation-promotion [homePromotion]="promotion"></app-presentation-promotion>
    </main>
  `,
  styles: ``
})
export default class HomePage implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  bannerSet: SetDetailModel = setDetailPlaceholder;
  homeCard: CardModel[] = [];
  homeSet: SetModel[] = [];
  promotion: ProductModel[] = [];

  ngOnInit() {
    this.bannerSet = this.route.snapshot.data['bannerSet'];
    this.homeCard = this.route.snapshot.data['homeCard'];
    this.homeSet = this.route.snapshot.data['homeSet'];
    this.promotion = this.route.snapshot.data['promotion'];
  }
}
