import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  protected readonly todos = signal<Todo[]>([
    { text: 'Hit the gym', completed: false },
    { text: 'Pay bills', completed: true },
    { text: 'Meet George', completed: false },
    { text: 'Buy eggs', completed: false },
    { text: 'Read a book', completed: false },
    { text: 'Organize office', completed: false },
  ]);
  protected newTodoText = signal('');

  toggleTodo(todo: Todo) {
    this.todos.update((currentTodos) =>
      currentTodos.map((t) => (t === todo ? { ...t, completed: !t.completed } : t)),
    );
  }

  addTodo() {
    const text = this.newTodoText().trim();

    if (text) {
      this.todos.update((currentTodos) => [...currentTodos, { text: text, completed: false }]);
    }

    this.newTodoText.set('');
  }

  deleteTodo(todoToDelete: Todo) {
    this.todos.update((currentTodos) => currentTodos.filter((todo) => todo !== todoToDelete));
  }
}
