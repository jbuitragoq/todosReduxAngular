import { Action, createReducer, on } from '@ngrx/store';
import { filterTypes, setFilter } from './filter.actions';

const initialFilter: filterTypes = 'all';

export const filterReducer = createReducer<filterTypes, Action>(
    initialFilter,
    on(setFilter, (state, { filter }) => filter)
)