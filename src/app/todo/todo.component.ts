import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() tasks: Array<Task> = [];
  @Output() deleteTaskEvent = new EventEmitter();
  onDeleteTask(id: number) {
    this.deleteTaskEvent.emit(id);
  }
}

export interface Task {
  id: number;
  name: string;
}
