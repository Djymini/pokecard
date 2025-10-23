import {Component, computed, inject} from '@angular/core';
import {OverlayBadge} from 'primeng/overlaybadge';
import {Button} from 'primeng/button';
import {CartFacade} from '../../../../features/cart/services/cart-facade';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-cart-button',
  imports: [
    OverlayBadge,
    Button,
    RouterLink
  ],
  templateUrl: './cart-button.html',
  styleUrl: './cart-button.scss'
})
export class CartButton {
  private cartFacade = inject(CartFacade);
  productNumber = computed(() => this.cartFacade.getCountProductsCart());
  disableBadge = computed(() => this.productNumber() < 1)
}
