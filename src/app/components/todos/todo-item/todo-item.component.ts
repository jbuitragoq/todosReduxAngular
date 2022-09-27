import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducer';
import { Todo } from 'src/app/models/todo.model';
import { TodoActions } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  activeEdit = false;
  checkCtrl: FormControl;
  inputCtrl: FormControl;

  @Input() todo: Todo = new Todo('');
  @ViewChild('inputText', { static: false }) inputText: ElementRef;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkCtrl = new FormControl(this.todo.completed);
    this.inputCtrl = new FormControl(this.todo.text, Validators.required);
    this.checkCtrl.valueChanges.subscribe(() => {
      this.store.dispatch(TodoActions.toggle({ id: this.todo.id }));
    });
  }

  initEdition(): void {
    this.activeEdit = true;
    this.inputCtrl.setValue(this.todo.text);
    setTimeout(() => this.inputText.nativeElement.select(), 10);
  }

  finishEdition(): void {
    this.activeEdit = false;
    
    if (this.inputCtrl.invalid) return;
    if (this.inputCtrl.value === this.todo.text) return;

    this.store.dispatch(
      TodoActions.edit({
        id: this.todo.id,
        text: this.inputCtrl.value
      })
    );
  }

  deleteTodo(): void {
    this.store.dispatch(TodoActions.remove({ id: this.todo.id }));
  }
}
