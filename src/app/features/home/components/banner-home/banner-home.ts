import {Component, computed, inject, OnInit, signal} from '@angular/core';
import {PrimaryButton} from '../../../../share/components/buttons/primary-button/primary-button';
import {Card} from '../../../../share/components/card/card';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {SetModel} from '../../../../share/models/set.model';
import {SetDetailModel} from '../../../../share/models/set-detail.model';

@Component({
  selector: 'app-banner-home',
  imports: [
    PrimaryButton,
    Card
  ],
  templateUrl: './banner-home.html',
  styleUrl: './banner-home.scss'
})
export class BannerHome implements OnInit {
  nameDetailButton: string = "Découvrir le nouveau set"
  widthCard: string = "195px";
  heightCard: string = "268px";

  private http = inject(HttpClient);

  homeSet = signal<SetDetailModel | null>(null);
  bannerCards = computed(() => this.homeSet()?.cards.slice(0, 5));
  isLoading = signal<boolean>(false);
  error = signal<string | null>(null);

  ngOnInit() {
    this.loadRecentSet();
  }

  async loadRecentSet() {
    try {
      this.isLoading.set(true);
      this.error.set(null);

      const sets = await firstValueFrom(
        this.http.get<SetModel[]>('https://api.tcgdex.net/v2/fr/sets?logo=notnull:&sort:field=releaseDate&sort:order=DESC')
      );

      const recentDetailSet =  await firstValueFrom(
        this.http.get<SetDetailModel>(`https://api.tcgdex.net/v2/fr/sets/${sets[0].id}`),
      )

      this.homeSet.set(recentDetailSet);
    } catch (err) {
      this.error.set('Erreur lors du chargement du set');
      console.error('Erreur API:', err);
    } finally {
      this.isLoading.set(false);
    }
  }
}
