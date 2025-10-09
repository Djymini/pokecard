import {computed, Injectable, signal} from '@angular/core';
import {ProductModel} from '../../product/models/productModel';
import {SetDetailModel} from '../../../share/models/set-detail.model';

@Injectable({
  providedIn: 'root'
})
export class CartStore {
  private cartSignal = signal<ProductModel[]>([]);

  cart = computed(() => this.cartSignal());

  addProduct(product: ProductModel): void {
    this.cartSignal.update(products => [...products, product]);
  }

  removeAllProduct(product: ProductModel): void {
    this.cartSignal.update(products => products.filter((element, index) => element.card.id !== product.card.id));
  }

  removeProduct(product: ProductModel): void {
    const indexForRemove = this.cartSignal().indexOf(product)
    if (indexForRemove !== -1) {
      this.cartSignal.update(products => products.filter((element, index) => index !== indexForRemove));
    }
  }

  clearCard(): void {
    this.cartSignal.update(products => []);
  }
}
