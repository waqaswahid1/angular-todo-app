import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');
  isLoading = signal(true);

  // Computed stats
  totalTodos = computed(() => this.todoItems().length);
  completedTodos = computed(() => this.todoItems().filter(t => t.completed).length);
  pendingTodos = computed(() => this.todoItems().filter(t => !t.completed).length);

  ngOnInit(): void {
    this.todoService
      .getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          this.isLoading.set(false);
          throw err;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
        this.isLoading.set(false);
      });
  }

  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  }

  clearSearch() {
    this.searchTerm.set('');
  }
}
