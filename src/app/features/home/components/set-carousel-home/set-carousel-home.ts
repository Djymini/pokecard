import {Component, inject, signal} from '@angular/core';
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
export class SetCarouselHome {
  private http = inject(HttpClient);

  homeSet = signal<SetModel[]>([]);
  isLoading = signal<boolean>(false);
  error = signal<string | null>(null);

  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.loadSet();

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

  async loadSet() {
    try {
      this.isLoading.set(true);
      this.error.set(null);

      const sets = await firstValueFrom(
        this.http.get<SetModel[]>('https://api.tcgdex.net/v2/fr/sets?logo=notnull:&pagination:itemsPerPage=9')
      );

      this.homeSet.set(sets);
    } catch (err) {
      this.error.set('Erreur lors du chargement du set');
      console.error('Erreur API:', err);
    } finally {
      this.isLoading.set(false);
    }
  }
}
