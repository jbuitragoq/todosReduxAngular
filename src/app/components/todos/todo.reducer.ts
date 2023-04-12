import { createReducer, on } from '@ngrx/store';
import { Todo } from "../../models/todo.model";
import TodoActions from "./todo.actions";

const todosList: Todo[] = [
    new Todo('Finish this course')
];

export const todoReducer = createReducer(
    todosList,
    on(TodoActions.add, addTodo),
    on(TodoActions.edit, editTodo),
    on(TodoActions.remove, removeTodo),
    on(TodoActions.toggle, toggleTodo),
    on(TodoActions.toggleAll, toggleAllTodo),
    on(TodoActions.clearCompleted, clearCompletedTodos)
)

function addTodo(state: Todo[], { text }: any): Todo[] {
    return [...state, new Todo(text)]
}

function editTodo(state: Todo[], { id, text }: any): Todo[] {
    return state.map(todo => {
        if (todo.id === id) {
            return {...todo, text};
        };
        return todo;
    });
}

function removeTodo(state: Todo[], { id }: any): Todo[] {
    return state.filter(t => t.id !== id)
}

function toggleTodo(state: Todo[], { id }: any): Todo[] {
    return state.map(todo => {
        if (todo.id === id) {
            return {...todo, completed: !todo.completed};
        };
        return todo;
    });
}

function toggleAllTodo(state: Todo[], { complete }: any): Todo[] {
    return state.map(todo => {
        return {...todo, completed: complete};
    });
}

function clearCompletedTodos(state: Todo[]): Todo[] {
    return state.filter(todo => !todo.completed);
}
