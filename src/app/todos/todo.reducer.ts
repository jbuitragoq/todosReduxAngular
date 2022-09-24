import { createReducer, on } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import { addTodo, toggleTodo, deleteTodo } from "./todo.actions";

const todosList: Todo[] = [
    new Todo('Finish this course')
];

export const todoReducer = createReducer(
    todosList,
    on(addTodo, (state, { text }) => [...state, new Todo(text)]),
    on(deleteTodo, (state, { id }) => [...state.filter(t => t.id !== id)]),
    on(toggleTodo, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed};
            };
            return todo;
        });
    })
)
