import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      Nombre: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      ConfirmEmail: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  get email() {
    return this.loginForm.get('Email')?.value;
  }

  get password() {
    return this.loginForm.get('password')?.value;
  }
}
