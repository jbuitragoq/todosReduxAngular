import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { toggleAllTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent {

  constructor(private store: Store<AppState>) { }

  toggleAll(event: any): void {
    this.store.dispatch(toggleAllTodos({ active: event.srcElement.checked }));
  }
}
