import { Component, signal } from '@angular/core';
import {ResolveEnd, ResolveStart, Router, RouterOutlet} from '@angular/router';
import {Header} from './core/header/components/header/header';
import {Footer} from './core/footer/components/footer/footer';
import {ToastError} from './shared/components/error/toast-error/toast-error';
import {Loader} from './core/loading/components/loader/loader';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ToastError, Loader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  isLoading = signal(true);
  protected readonly title = signal('pokecard');

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof ResolveStart) this.isLoading.set(true);
      if (event instanceof ResolveEnd) this.isLoading.set(false);
    })
  }
}
