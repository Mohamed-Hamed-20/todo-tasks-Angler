import { TodoChildComponent } from './../todo-child/todo-child.component';
import { Task, TodoComponent } from './../todo/todo.component';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-parent',
  imports: [TodoComponent, TodoChildComponent, FormsModule],
  templateUrl: './todo-parent.component.html',
  styleUrls: ['./todo-parent.component.css'],
})
export class TodoParentComponent {
  tasks: Array<Task> = [];

  addTask(taskName: string) {
    this.tasks.push({ id: this.tasks.length, name: taskName });
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter((task) => {
      return task.id !== taskId;
    });
  }
}
