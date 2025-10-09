import {Component, computed, input} from '@angular/core';
import {ProductModel} from '../../models/productModel';
import {Card} from '../../../card/components/card/card';
import {StockIndicator} from '../stock-indicator/stock-indicator';
import {PriceIndicator} from '../price-indicator/price-indicator';

@Component({
  selector: 'app-product-main-presentation',
  imports: [
    Card,
    StockIndicator,
    PriceIndicator
  ],
  templateUrl: './product-main-presentation.html',
  styleUrl: './product-main-presentation.scss'
})
export class ProductMainPresentation {
  product = input.required<ProductModel>()
  cardImage = computed(() => this.product().card.image + "/high.png")
  altImage = computed(() => this.product().card.name + " image")

  widthCard: string = "251px";
  heightCard: string = "345px";
}
