import {Component, input} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-banner-card',
  imports: [
    NgStyle
  ],
  templateUrl: './banner-card.html',
  styleUrl: './banner-card.scss'
})
export class BannerCard {
  cardImage = input.required<string>();

}
