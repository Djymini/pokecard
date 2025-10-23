import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/user-model';
import {firstValueFrom} from 'rxjs';
import {AuthResponse} from '../models/auth-response-model';
import {LoginDto} from '../dto/login-dto';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private http = inject(HttpClient);

  // STORE : État en mémoire
  private currentUserSignal = signal<UserModel | null>(null);
  private isAuthenticatedSignal = signal<boolean>(false);

  currentUser = computed(() => this.currentUserSignal());
  isAuthenticated = computed(() => this.isAuthenticatedSignal());

  // API : Appels backend
  async login(credentials: LoginDto): Promise<void> {;
    const response = await firstValueFrom(
      this.http.get<AuthResponse>('https://jsonplaceholder.typicode.com/users/1')
    );
    this.handleSuccessfulLogin(response);
  }

  async logout(): Promise<void> {
    await firstValueFrom(this.http.post('/api/auth/logout', {}));
    this.handleLogout();
  }

  // FACADE : orchestration
  private handleSuccessfulLogin(response: AuthResponse): void {
    localStorage.setItem('token', response.email);
    this.currentUserSignal.set(response);
    this.isAuthenticatedSignal.set(true);
    console.log(this.currentUserSignal())
  }

  private handleLogout(): void {
    localStorage.removeItem('token');
    this.currentUserSignal.set(null);
    this.isAuthenticatedSignal.set(false);
  }
}
