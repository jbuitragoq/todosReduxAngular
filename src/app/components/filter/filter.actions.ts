import { createAction, props } from '@ngrx/store';

export type FilterTypes = 'all' | 'active' | 'completed';

export const setFilter = createAction(
    '[Filter] setFilter',
    props<{ filter: FilterTypes }>()
)