import {Component, computed, inject, input, signal} from '@angular/core';
import {CardModel} from '../../../../share/models/card.model';
import {ActivatedRoute} from '@angular/router';
import {SetDetailModel} from '../../../../share/models/set-detail.model';
import {firstValueFrom} from 'rxjs';
import {SetModel} from '../../../../share/models/set.model';
import {HttpClient} from '@angular/common/http';
import {NgStyle} from '@angular/common';
import {Card} from '../../../card/components/card/card';

@Component({
  selector: 'app-carousel-home',
  imports: [
    NgStyle,
    Card
  ],
  templateUrl: './carousel-home.html',
  styleUrl: './carousel-home.scss'
})
export class CarouselHome {
  widthCard: string = '390px'
  heightCard: string = '538px'
  active = 4;
  MAX_VISIBILITY = 3;
  protected readonly Math = Math;

  homeCard = input.required<CardModel[]>();

  get count() {
    return this.homeCard().length;
  }

  prev() {
    if (this.active > 0) this.active--;
  }

  next() {
    if (this.active < this.count - 1) this.active++;
  }

  getStyle(i: number): any {
    const offset = (this.active - i) / 3;
    const absOffset = Math.abs(offset);

    return {
      '--active': i === this.active ? 1 : 0,
      '--offset': offset,
      '--direction': Math.sign(this.active - i),
      '--abs-offset': absOffset,
      'pointer-events': i === this.active ? 'auto' : 'none',
      'opacity': absOffset >= this.MAX_VISIBILITY ? '0' : '1',
      'display': absOffset > this.MAX_VISIBILITY ? 'none' : 'block'
    };
  }
}
