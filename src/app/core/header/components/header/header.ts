import { Component } from '@angular/core';
import {Navbar} from '../navbar/navbar';
import {NavbarSearchbar} from '../navbar-searchbar/navbar-searchbar';
import {CartButton} from '../cart-button/cart-button';

@Component({
  selector: 'app-header',
  imports: [
    Navbar,
    NavbarSearchbar,
    CartButton
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
