import {Component, inject, OnInit, signal} from '@angular/core';
import {ProductMainPresentation} from '../../../product/components/product-main-presentation/product-main-presentation';
import {ProductCard} from '../../../product/components/product-card/product-card';
import {firstValueFrom} from 'rxjs';
import {CardModel} from '../../../../share/models/card.model';
import {ProductModel} from '../../../product/models/productModel';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-presentation-promotion',
  imports: [
    ProductMainPresentation,
    ProductCard
  ],
  templateUrl: './presentation-promotion.html',
  styleUrl: './presentation-promotion.scss'
})
export class PresentationPromotion implements OnInit {
  homePromotion = signal<ProductModel[]>([]);
  isLoading = signal<boolean>(false);
  error = signal<string | null>(null);

  private http = inject(HttpClient);

  ngOnInit() {
    this.loadCard();
  }

  async loadCard() {
    try {
      this.isLoading.set(true);
      this.error.set(null);

      const jsonProduct = 'data/main-promotion.json';

      const promotions = await firstValueFrom(
        this.http.get<ProductModel[]>(jsonProduct)
      );

      this.homePromotion.set(promotions);
    } catch (err) {
      this.error.set('Erreur lors du chargement du set');
      console.error('Erreur API:', err);
    } finally {
      this.isLoading.set(false);
    }
  }
}
