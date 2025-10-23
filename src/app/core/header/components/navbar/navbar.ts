import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NAME_APP} from '../../../../shared/constants/globalConstants';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  nameApp: string = NAME_APP;

}
