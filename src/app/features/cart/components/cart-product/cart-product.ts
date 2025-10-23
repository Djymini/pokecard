import {Component, computed, inject, input, output} from '@angular/core';
import {ProductModel} from '../../../product/models/productModel';
import {CartFacade} from '../../services/cart-facade';
import {PriceIndicator} from '../../../product/components/price-indicator/price-indicator';

@Component({
  selector: 'app-cart-product',
  imports: [
    PriceIndicator
  ],
  templateUrl: './cart-product.html',
  styleUrl: './cart-product.scss'
})
export class CartProduct {
  product = input.required<ProductModel>();
  products = input.required<ProductModel[]>();
  numberSameProduct = computed(() => this.products().filter((element) => element.card.id === this.product().card.id).length)

  private cartFacade = inject(CartFacade);

  remove() {
    this.cartFacade.removeAllProduct(this.product());
  }

  decrease() {
    this.cartFacade.removeProductCart(this.product());
  }

  add() {
    this.cartFacade.addProductCart(this.product());
  }
}
