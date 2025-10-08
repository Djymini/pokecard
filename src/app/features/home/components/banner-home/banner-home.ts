import { Component } from '@angular/core';
import {PrimaryButton} from '../../../../share/components/buttons/primary-button/primary-button';
import {BannerCard} from '../banner-card/banner-card';

@Component({
  selector: 'app-banner-home',
  imports: [
    PrimaryButton,
    BannerCard
  ],
  templateUrl: './banner-home.html',
  styleUrl: './banner-home.scss'
})
export class BannerHome {
  nameDetailButton: string = "Voir détails"
}
