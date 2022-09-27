import { createAction, props } from "@ngrx/store";

export const addTodo = createAction(
    '[Todo] Add',
    props<{ text: string }>()
);
export const editTodo = createAction(
    '[Todo] Edit',
    props<{ id: number, text: string}>()
)
export const deleteTodo = createAction(
    '[Todo] Delete',
    props<{ id: number }>()
);
export const toggleTodo = createAction(
    '[Todo] Toggle',
    props<{ id: number }>()
);
export const toggleAllTodos = createAction(
    '[Todo] ToggleAll',
    props<{ active: boolean }>()
)