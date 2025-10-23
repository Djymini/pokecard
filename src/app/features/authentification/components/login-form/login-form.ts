import {Component, inject} from '@angular/core';
import {FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {LoginFormModel} from '../../models/login-model';
import {RouterLink} from '@angular/router';
import {Auth} from '../../services/auth';
import {LoginDto} from '../../dto/login-dto';

@Component({
  selector: 'app-login-form',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss'
})
export class LoginForm {
  private formBuilder = inject(NonNullableFormBuilder);
  private authService = inject(Auth)

  loginForm: FormGroup<LoginFormModel> = this.formBuilder.group({
    email: this.formBuilder.control('', Validators.required),
    password: this.formBuilder.control('', Validators.required),
    rememberMe: this.formBuilder.control(false)
  });

  onSubmit() {
    const credential: LoginDto = new LoginDto(this.loginForm.getRawValue().email, this.loginForm.getRawValue().password)
    this.authService.login(credential);
  }
}
