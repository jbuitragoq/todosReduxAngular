import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from 'src/app/models/todo.model';
import { FilterTypes } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  currentFilter: FilterTypes = 'all';
  todosList: Todo[] = [];

  constructor(private store: Store<AppState>) {
    store.select('todosList').subscribe(todos => this.todosList = todos);
    store.select('filter').subscribe(filter => this.currentFilter = filter);
  }
}
