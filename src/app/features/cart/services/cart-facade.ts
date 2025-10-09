import {inject, Injectable} from '@angular/core';
import {HomeApi} from '../../home/services/home-api';
import {HomeStore} from '../../home/services/home-store';
import {CartApi} from './cart-api';
import {CartStore} from './cart-store';
import {ProductModel} from '../../product/models/productModel';

@Injectable({
  providedIn: 'root'
})
export class CartFacade {
  private cartApi = inject(CartApi);
  private cartStore = inject(CartStore);

  getCountProductsCart(): number{
    return this.cartStore.cart().length;
  }

  getCart(): ProductModel[]{
    return this.cartStore.cart();
  }

  addProductCart(product: ProductModel){
    this.cartStore.addProduct(product);
  }

  removeAllProduct(product: ProductModel){
    this.cartStore.removeAllProduct(product);
  }

  removeProductCart(product: ProductModel){
    this.cartStore.removeProduct(product);
  }

  clearCart(){
    this.cartStore.clearCard();
  }
}
