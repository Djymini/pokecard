import {Component, computed, input} from '@angular/core';
import {SetModel} from '../../../../share/models/set.model';

@Component({
  selector: 'app-set-card',
  imports: [],
  templateUrl: './set-card.html',
  styleUrl: './set-card.scss'
})
export class SetCard {
  set = input.required<SetModel>()

  setTmage = computed(() => this.set().logo + ".png")
}
