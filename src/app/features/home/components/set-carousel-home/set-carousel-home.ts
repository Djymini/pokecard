import {Component, inject, input, OnInit, signal} from '@angular/core';
import {Carousel} from 'primeng/carousel';
import {SetModel} from '../../../../share/models/set.model';
import {SetCard} from '../set-card/set-card';
import {firstValueFrom} from 'rxjs';
import {CardModel} from '../../../../share/models/card.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-set-carousel-home',
  imports: [
    Carousel,
    SetCard
  ],
  templateUrl: './set-carousel-home.html',
  styleUrl: './set-carousel-home.scss'
})
export class SetCarouselHome implements OnInit {
  private http = inject(HttpClient);

  homeSet = input.required<SetModel[]>();

  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
      }
    ]
  }
}
