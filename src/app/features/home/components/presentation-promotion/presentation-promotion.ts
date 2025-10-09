import {Component, inject, input, OnInit, signal} from '@angular/core';
import {ProductMainPresentation} from '../../../product/components/product-main-presentation/product-main-presentation';
import {ProductCard} from '../../../product/components/product-card/product-card';
import {firstValueFrom} from 'rxjs';
import {CardModel} from '../../../../share/models/card.model';
import {ProductModel} from '../../../product/models/productModel';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-presentation-promotion',
  imports: [
    ProductMainPresentation,
    ProductCard
  ],
  templateUrl: './presentation-promotion.html',
  styleUrl: './presentation-promotion.scss'
})
export class PresentationPromotion{
  homePromotion = input.required<ProductModel[]>();
}
