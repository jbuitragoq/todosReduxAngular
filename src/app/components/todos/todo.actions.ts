import { createAction, props } from "@ngrx/store";

export namespace TodoActions {
    export const add = createAction(
        '[Todo] Add',
        props<{ text: string }>()
    );
    export const edit = createAction(
        '[Todo] Edit',
        props<{ id: number, text: string}>()
    )
    export const remove = createAction(
        '[Todo] Remove',
        props<{ id: number }>()
    );
    export const toggle = createAction(
        '[Todo] Toggle',
        props<{ id: number }>()
    );
    export const toggleAll = createAction(
        '[Todo] ToggleAll',
        props<{ complete: boolean }>()
    )
    export const clearCompleted = createAction(
        '[Todo] ClearCompleted'
    )
}
