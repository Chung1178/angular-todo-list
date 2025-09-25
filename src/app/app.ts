import { Component, signal } from '@angular/core';
import { TodoList } from './features/todo/todo-list/todo-list';

@Component({
  selector: 'app-root',
  imports: [TodoList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('My To Do List');
}
