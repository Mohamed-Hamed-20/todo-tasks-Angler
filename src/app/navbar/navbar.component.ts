import { AppComponent } from './../app.component';
import { NgClass } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  searchText: string = 'Omar';

  displayData() {
    console.log(this.searchText);
  }
}



