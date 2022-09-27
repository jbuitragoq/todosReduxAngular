import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { TodoActions } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent {

  constructor(private store: Store<AppState>) { }

  toggleAll(event: any): void {
    this.store.dispatch(TodoActions.toggleAll({ complete: event.srcElement.checked }));
  }
}
