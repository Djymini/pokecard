import {Component, computed, inject, input, output} from '@angular/core';
import {ProductModel} from '../../models/productModel';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {StockIndicator} from '../stock-indicator/stock-indicator';
import {PriceIndicator} from '../price-indicator/price-indicator';
import {Card} from '../../../card/components/card/card';
import {CartFacade} from '../../../cart/services/cart-facade';

@Component({
  selector: 'app-product-card',
  imports: [
    StockIndicator,
    PriceIndicator,
    Card
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  private cartFacade = inject(CartFacade);
  product = input.required<ProductModel>()

  cardWidth: string = '167px';
  cardHeight: string = '230px';
  productAddedToCart = output<ProductModel>()


  addToCart(): void {
    if (this.product().stock > 0) {
      this.cartFacade.addProductCart(this.product());
    }
  }
}
