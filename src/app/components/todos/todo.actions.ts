import { createAction, props } from "@ngrx/store";

namespace TodoActions {
    export const add = createAction(
        '[Todos] Add',
        props<{ text: string }>()
    );
    export const edit = createAction(
        '[Todos] Edit',
        props<{ id: number, text: string}>()
    )
    export const remove = createAction(
        '[Todos] Remove',
        props<{ id: number }>()
    );
    export const toggle = createAction(
        '[Todos] Toggle',
        props<{ id: number }>()
    );
    export const toggleAll = createAction(
        '[Todos] ToggleAll',
        props<{ complete: boolean }>()
    )
    export const clearCompleted = createAction(
        '[Todos] ClearCompleted'
    )
}
export default TodoActions;
