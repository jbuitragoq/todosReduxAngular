import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { FilterTypes } from '../../filter/filter.actions';

@Pipe({ name: 'filterTodo' })
export class FilterPipe implements PipeTransform {

  transform(todosList: Todo[], filter: FilterTypes): Todo[] {
    switch (filter) {
      case 'active':
        return todosList.filter(todo => !todo.completed);
      case 'completed':
        return todosList.filter(todo => todo.completed);
      default:
        return todosList;
    };
  }

}
