import { Injectable, signal } from '@angular/core';

export interface Todo {
  text: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  public readonly todos = signal<Todo[]>([
    { text: 'Hit the gym', completed: false },
    { text: 'Pay bills', completed: true },
    { text: 'Meet George', completed: false },
    { text: 'Buy eggs', completed: false },
    { text: 'Read a book', completed: false },
    { text: 'Organize office', completed: false },
  ]);

  public toggleTodo(todo: Todo) {
    this.todos.update((currentTodos) =>
      currentTodos.map((t) => (t === todo ? { ...t, completed: !t.completed } : t)),
    );
  }

  public addTodo(text: string) {
    this.todos.update((currentTodos) => [...currentTodos, { text: text, completed: false }]);
  }

  public deleteTodo(todoToDelete: Todo) {
    this.todos.update((currentTodos) => currentTodos.filter((todo) => todo !== todoToDelete));
  }
}
