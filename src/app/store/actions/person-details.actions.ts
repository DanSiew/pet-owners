import { createAction, props } from '@ngrx/store';
import { PersonModel } from '../../core/models';

export const GET_PERSON_DETAILS = '[PersonDetails] GET_PersonDetails';
export const GET_PERSON_DETAILS_SUCCESS =
  '[PersonDetails] GET_PersonDetails_SUCCESS';
export const GET_PERSON_DETAILS_ERROR =
  '[PersonDetails] GET_PersonDetails_ERROR';
export const GET_PERSON_DETAILS_LOADING =
  '[PersonDetails] SET_PersonDetails_LOADING';

export const getPersonDetails = createAction(GET_PERSON_DETAILS);

export const getPersonDetailsSuccess = createAction(
  GET_PERSON_DETAILS_SUCCESS,
  props<{ personsResult: PersonModel[] }>()
);

export const getPersonDetailsError = createAction(
  GET_PERSON_DETAILS_ERROR,
  props<{ error: any }>()
);

export const setPersonDetailsLoading = createAction(
  GET_PERSON_DETAILS_LOADING,
  props<{ loading: boolean }>()
);
