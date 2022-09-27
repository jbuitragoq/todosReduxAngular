import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { TodoActions } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {

  inputCtrl: FormControl;

  constructor(private store: Store<AppState>) {
    this.inputCtrl = new FormControl('', Validators.required);
  }

  addTodo(): void {
    if (this.inputCtrl.valid) {
      this.store.dispatch(TodoActions.add({ text: this.inputCtrl.value }));
      this.inputCtrl.reset();
    }
  } 
}
