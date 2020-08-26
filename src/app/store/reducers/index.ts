import { ActionReducerMap } from '@ngrx/store';
import * as fromPersonDetails from './person-details.reducer';

export interface AppState {
  personDetails: fromPersonDetails.PersonDetailsState;
}

export const reducers: ActionReducerMap<AppState> = {
  personDetails: fromPersonDetails.reducer

};

