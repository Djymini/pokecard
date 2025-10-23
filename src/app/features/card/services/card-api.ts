import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {CardModel} from '../../../shared/models/card.model';
import {BaseApi} from '../../../shared/services/base.api';

@Injectable({
  providedIn: 'root'
})
export class CardApi extends BaseApi{
  getRecentCard(): Promise<CardModel[]>{
    return this.get<CardModel[]>('cards?image=notnull:&sort:field=updated&sort:order=DESC&pagination:itemsPerPage=10')
  }

  getCardByName(name: String): Promise<CardModel[]>{
    return this.get<CardModel[]>(`cards?id=${name}`)
  }
}
