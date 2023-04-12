import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { todoReducer } from './components/todos/todo.reducer';
import { FilterTypes } from './components/filter/filter.actions';
import { filterReducer } from './components/filter/filter.reducer';

export interface AppState {
    todos: Todo[];
    filter: FilterTypes
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
}
