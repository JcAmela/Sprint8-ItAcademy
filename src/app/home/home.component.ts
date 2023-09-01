import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  openModal:boolean = false
  showStarShipsButton: boolean = true;

  changeOpenModal() {
    this.openModal = !this.openModal;
    this.showStarShipsButton = false; 
}

}
