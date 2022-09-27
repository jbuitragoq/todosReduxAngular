import { createReducer, on } from "@ngrx/store";
import { Todo } from "../../models/todo.model";
import { TodoActions } from "./todo.actions";

const todosList: Todo[] = [
    new Todo('Finish this course')
];

export const todoReducer = createReducer(
    todosList,
    on(TodoActions.add, (state, { text }) => {
        return [...state, new Todo(text)]
    }),
    on(TodoActions.edit, (state, { id, text }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {...todo, text};
            };
            return todo;
        });
    }),
    on(TodoActions.remove, (state, { id }) => {
        return state.filter(t => t.id !== id)
    }),
    on(TodoActions.toggle, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed};
            };
            return todo;
        });
    }),
    on(TodoActions.toggleAll, (state, { complete }) => {
        return state.map(todo => {
            return {...todo, completed: complete};
        });
    })
)
