import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardSectionComponent } from './card-section/card-section.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { TodoParentComponent } from './todo-parent/todo-parent.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    CardSectionComponent,
    TodoParentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'task2-angular';
}
