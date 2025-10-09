import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {CardModel} from '../../../share/models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardApi {
  private http = inject(HttpClient);
  private readonly BASE_URL = 'https://api.tcgdex.net/v2/fr/';

  getRecentCard(): Promise<CardModel[]>{
    return firstValueFrom(this.http.get<CardModel[]>(this.BASE_URL + 'cards?image=notnull:&sort:field=updated&sort:order=DESC&pagination:itemsPerPage=10'));
  }

}
