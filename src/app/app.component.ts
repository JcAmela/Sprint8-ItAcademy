import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sprint8-ItAcademy';
  onLogout() {
    localStorage.removeItem('isAuthenticated');
    // Y aquí puedes redirigir al usuario al componente de inicio de sesión
  }
  get isAuthenticated(): boolean {
    return localStorage.getItem('isAuthenticated') ? true : false;
  }
  
}
