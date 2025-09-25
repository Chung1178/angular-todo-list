import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo, TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  private todoListService = inject(TodoListService);
  protected readonly todos = this.todoListService.todos;
  protected newTodoText = signal('');

  toggleTodo(todo: Todo) {
    this.todoListService.toggleTodo(todo);
  }

  addTodo() {
    const text = this.newTodoText().trim();
    if (text) {
      this.todoListService.addTodo(text);
      this.newTodoText.set('');
    }
  }

  deleteTodo(todo: Todo) {
    this.todoListService.deleteTodo(todo);
  }
}
