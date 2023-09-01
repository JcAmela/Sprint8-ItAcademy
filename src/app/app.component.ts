import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sprint8-ItAcademy';

  constructor(private router: Router) {}

  onLogout() {
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']); 
  }

  get isAuthenticated(): boolean {
    return localStorage.getItem('isAuthenticated') ? true : false;
  }
}
