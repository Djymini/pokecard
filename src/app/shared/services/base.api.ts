import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {ErrorService} from '../../core/error/services/error.service';

@Injectable({
  providedIn: 'root'
})
export class BaseApi {
  protected http = inject(HttpClient);
  protected errorService = inject(ErrorService);
  protected readonly BASE_URL = 'https://api.tcgdex.net/v2/fr/';
  protected readonly jsonPromotion = 'data/main-promotion.json';
  protected readonly jsconProduct = 'data/product.json';

  protected getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  protected async get<T>(endpoint: string): Promise<T> {
    try {
      return await firstValueFrom(
        this.http.get<T>(`${this.BASE_URL}${endpoint}`, { headers: this.getHeaders() })
      );
    } catch (error) {
      throw this.handleError(error);
    }
  }

  protected async getJson<T>(json: string): Promise<T> {
    try {
      return await firstValueFrom(
        this.http.get<T>(json)
      );
    } catch (error) {
      throw this.handleError(error);
    }
  }

  protected async post<T>(endpoint: string, body: any): Promise<T> {
    try {
      return await firstValueFrom(
        this.http.post<T>(`${this.BASE_URL}${endpoint}`, body, { headers: this.getHeaders() })
      );
    } catch (error) {
      throw this.handleError(error);
    }
  }

  protected async put<T>(endpoint: string, body: any): Promise<T> {
    try {
      return await firstValueFrom(
        this.http.put<T>(`${this.BASE_URL}${endpoint}`, body, { headers: this.getHeaders() })
      );
    } catch (error) {
      throw this.handleError(error);
    }
  }

  protected async delete<T>(endpoint: string): Promise<T> {
    try {
      return await firstValueFrom(
        this.http.delete<T>(`${this.BASE_URL}${endpoint}`, { headers: this.getHeaders() })
      );
    } catch (error) {
      throw this.handleError(error);
    }
  }

  protected handleError(error: any): Error {
    if (error instanceof HttpErrorResponse) {
      let err: Error;

      switch (error.status) {
        case 400:
          err = new Error('Données invalides');
          break;
        case 401:
          err = new Error('Non autorisé');
          break;
        case 403:
          err = new Error('Accès interdit');
          break;
        case 404:
          err = new Error('Ressource non trouvée');
          break;
        case 500:
          err = new Error('Erreur serveur');
          break;
        default:
          err = new Error('Erreur réseau');
      }

      // 👇 Notification vers ErrorService
      this.errorService.notify(err.message);
      return err;
    }

    const generic = new Error('Erreur inconnue');
    this.errorService.notify(generic.message);
    return generic;
  }
}
