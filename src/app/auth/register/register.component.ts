import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    }, {validator: this.passwordsMustMatch});
  }

  get username() { return this.registerForm.get('username'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }

  passwordsMustMatch(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value ? null : {passwordMismatch: true};
  }

  onRegister() {
    if (this.registerForm.invalid) return;

    localStorage.setItem('username', this.registerForm.value.username);
    localStorage.setItem('password', this.registerForm.value.password);

    this.router.navigate(['/login']);
  }
}
