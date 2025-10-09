import {Component, computed, inject, input, OnInit, signal} from '@angular/core';
import {PrimaryButton} from '../../../../share/components/buttons/primary-button/primary-button';
import {Card} from '../../../card/components/card/card';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {SetModel} from '../../../../share/models/set.model';
import {SetDetailModel} from '../../../../share/models/set-detail.model';
import {HomeFacade} from '../../services/home-facade';

@Component({
  selector: 'app-banner-home',
  imports: [
    PrimaryButton,
    Card
  ],
  templateUrl: './banner-home.html',
  styleUrl: './banner-home.scss'
})
export class BannerHome {
  nameDetailButton: string = "Découvrir le nouveau set"
  widthCard: string = "195px";
  heightCard: string = "268px";

  bannerSet = input.required<SetDetailModel>();
  bannerCards = computed(() => this.bannerSet()?.cards.slice(0, 5));
}
