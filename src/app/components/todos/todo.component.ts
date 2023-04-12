import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import TodoActions from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  constructor(private store: Store<AppState>) { }

  toggleAll(event: any): void {
    this.store.dispatch(TodoActions.toggleAll({ complete: event.srcElement.checked }));
  }
}
