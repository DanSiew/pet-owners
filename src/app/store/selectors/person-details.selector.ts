import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';

import { AppState } from '../reducers';
import { PersonDetailsState } from '../reducers/person-details.reducer';

// selectors
const getEntityState = createFeatureSelector<AppState>('entityCache');

export const getPersonDetailsState = createSelector(
  getEntityState,
  (state: AppState) => state.personDetails
);

export const getPersonDetails = createSelector(
  getPersonDetailsState,
  (state: PersonDetailsState) => {
    return Object.keys(state.entities).map((i) => state.entities[i]);
  }
);

export const getPersonDetailsLoading = createSelector(
  getPersonDetailsState,
  (state: PersonDetailsState) => state.loading
);

export const getPersonDetailsLoaded = createSelector(
  getPersonDetailsState,
  (state: PersonDetailsState) => state.loaded
);

export const hasError = createSelector(
  getPersonDetailsState,
  (state: PersonDetailsState) => state.error
);
