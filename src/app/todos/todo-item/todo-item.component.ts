import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from 'src/app/models/todo.model';
import { toggleTodo } from '../todo.actions';

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
      this.store.dispatch(toggleTodo({ id: this.todo.id }));
    });
  }

  initEdition(): void {
    this.activeEdit = true;
    setTimeout(() => this.inputText.nativeElement.select(), 10);
  }

  finishEdition(): void {
    this.activeEdit = false;
  }
}
