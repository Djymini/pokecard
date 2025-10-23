import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductModel} from '../models/productModel';
import {firstValueFrom} from 'rxjs';
import {BaseApi} from '../../../shared/services/base.api';

@Injectable({
  providedIn: 'root'
})
export class ProductApi extends BaseApi{

  getPromotion(): Promise<ProductModel[]>{
    return this.getJson(this.jsonPromotion);
  }

  getProductList(): Promise<ProductModel[]>{
    return this.getJson(this.jsconProduct);
  }
}
