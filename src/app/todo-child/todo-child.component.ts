import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../todo/todo.component';

@Component({
  selector: 'app-todo-child',
  imports: [FormsModule],
  templateUrl: './todo-child.component.html',
  styleUrls: ['./todo-child.component.css'],
})
export class TodoChildComponent {
  textInputValue: string = '';
  @Output() TaskText = new EventEmitter<string>();

  onaddTask(value: string) {
    value = value.trim();
    if (!value) {
      alert('Please enter a task.');
      return;
    }
    this.TaskText.emit(value);
    this.textInputValue = '';
  }
}
