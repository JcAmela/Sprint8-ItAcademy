import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isAuthenticated = !!localStorage.getItem('isAuthenticated');
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  onLogout() {
    localStorage.removeItem('isAuthenticated');
    this.isAuthenticated = false;
  }
}
