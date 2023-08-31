import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importa Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';// Agrega esta propiedad para el binding con ngModel
  password: string = ''; // Agrega esta propiedad para el binding con ngModel

  constructor(private router: Router) {}  // Inyecta Router a través del constructor
  onLogin() {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
  
    if (this.username === storedUsername && this.password === storedPassword) {
      localStorage.setItem('isAuthenticated', 'true');
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
    }
  }
  
  
}
