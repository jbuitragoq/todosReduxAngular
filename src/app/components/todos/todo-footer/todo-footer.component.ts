import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { FilterTypes, setFilter } from '../../filter/filter.actions';
import { TodoActions } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent {

  pendingTodos: number = 0;
  currentFilter: FilterTypes = 'all';
  filterList: FilterTypes[] = ['all', 'active', 'completed'];

  constructor(private store: Store<AppState>) {
    store.select('filter').subscribe(filter => this.currentFilter = filter);
    store.select('todosList').subscribe(todosList => {
      this.pendingTodos = todosList.filter(todo => !todo.completed).length;
    })
  }

  selectFilter(filter: FilterTypes): void {
    this.store.dispatch(setFilter({ filter }));
  }

  clearCompleted(): void {
    this.store.dispatch(TodoActions.clearCompleted());
  }
}
