import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    // Almacenamos el nombre de usuario y la contraseña en localStorage
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
  
    // Redirigimos al usuario a la página de inicio de sesión
    this.router.navigate(['/login']);
  }
  
  
}
