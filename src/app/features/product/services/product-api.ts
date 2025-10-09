import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductModel} from '../models/productModel';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApi {
  private http = inject(HttpClient);
  private readonly jsonPromotion = 'data/main-promotion.json';

  getPromotion(): Promise<ProductModel[]>{
    return firstValueFrom(this.http.get<ProductModel[]>(this.jsonPromotion))
  }
}
