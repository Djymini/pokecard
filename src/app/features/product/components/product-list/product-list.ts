import {Component, input} from '@angular/core';
import {ProductModel} from '../../models/productModel';
import {ProductCard} from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [
    ProductCard
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {
  productList = input.required<ProductModel[]>();
}
