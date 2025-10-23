import {Component, inject} from '@angular/core';
import {ErrorService} from '../../../../core/error/services/error.service';

@Component({
  selector: 'app-toast-error',
  imports: [],
  templateUrl: './toast-error.html',
  styleUrl: './toast-error.scss'
})
export class ToastError {
  error = inject(ErrorService).error;
}
