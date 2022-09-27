import { Action, createReducer, on } from '@ngrx/store';
import { FilterTypes, setFilter } from './filter.actions';

const initialFilter: FilterTypes = 'all';

export const filterReducer = createReducer<FilterTypes, Action>(
    initialFilter,
    on(setFilter, (state, { filter }) => filter)
)