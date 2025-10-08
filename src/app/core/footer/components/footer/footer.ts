import { Component } from '@angular/core';
import {NAME_APP} from '../../../../share/constants/globalConstants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  nameApp:string = NAME_APP;
}
