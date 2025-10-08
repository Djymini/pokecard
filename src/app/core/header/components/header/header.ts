import { Component } from '@angular/core';
import {Navbar} from '../navbar/navbar';
import {NavbarSearchbar} from '../navbar-searchbar/navbar-searchbar';

@Component({
  selector: 'app-header',
  imports: [
    Navbar,
    NavbarSearchbar
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
