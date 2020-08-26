import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import { PersonModel } from 'src/app/core/models';
import * as PersonDetailsActions from '../actions';

export interface PersonDetailsState extends EntityState<PersonModel> {
  loading: boolean;
  error: boolean;
  loaded: boolean;
}
export const adapter: EntityAdapter<PersonModel> = createEntityAdapter<
  PersonModel
>();

export const initialState: PersonDetailsState = adapter.getInitialState({
  loading: false,
  error: false,
  loaded: false,
});

const PersonDetailsReducer = createReducer(
  initialState,
  on(PersonDetailsActions.getPersonDetails, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: false,
  })),
  on(PersonDetailsActions.getPersonDetailsError, (state) => ({
    ...state,
    loading: false,
    error: true,
  })),
  on(PersonDetailsActions.getPersonDetailsSuccess, (state, action) =>
    adapter.addMany(action.personsResult, {
      ...state,
      loading: false,
      loaded: true,
      error: false,
    })
  ),
  on(PersonDetailsActions.setPersonDetailsLoading, (state, { loading }) => ({
    ...state,
    loading: loading == null ? true : loading,
    error: false,
    loaded: false,
  }))
);

export function reducer(state: PersonDetailsState | undefined, action: Action) {
  return PersonDetailsReducer(state, action);
}
