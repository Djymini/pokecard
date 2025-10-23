import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {SetModel} from '../../../shared/models/set.model';
import {SetDetailModel} from '../../../shared/models/set-detail.model';
import {CardApi} from '../../card/services/card-api';
import {ProductApi} from '../../product/services/product-api';
import {ProductModel} from '../../product/models/productModel';
import {CardModel} from '../../../shared/models/card.model';

@Injectable({
  providedIn: 'root'
})
export class HomeApi {
  private http = inject(HttpClient);
  private cardApi = inject(CardApi);
  private productApi = inject(ProductApi);
  private readonly BASE_URL = 'https://api.tcgdex.net/v2/fr/';

  getRecentSet(): Promise<SetDetailModel> {
    return firstValueFrom(this.http.get<SetDetailModel>(`https://api.tcgdex.net/v2/fr/sets/sv06`));
  }

  getSet(): Promise<SetModel[]> {
    return firstValueFrom(this.http.get<SetModel[]>(this.BASE_URL+"sets?logo=notnull:&pagination:itemsPerPage=9"));
  }

  getCard(): Promise<CardModel[]>{
    return this.cardApi.getRecentCard();
  }


  getPromotion(): Promise<ProductModel[]>{
    return this.productApi.getPromotion()
  }
}
