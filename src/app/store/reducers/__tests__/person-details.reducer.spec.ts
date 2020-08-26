import * as actions from 'src/app/store/actions/person-details.actions';
import { mockPersonDetails } from '../../mockData/mock-persons-entities';
import * as fromPersonDetailsReducer from '../person-details.reducer';

describe('Person Details Reducer', () => {
  it('should handle action "[PersonDetails] SET_PersonDetails_LOADING" correctly', () => {
    const reducer = fromPersonDetailsReducer.reducer(
      fromPersonDetailsReducer.initialState,
      actions.setPersonDetailsLoading
    );
    expect(reducer.loading).toEqual(true);
  });

  it('should handle action "[PersonDetails] GET_PersonDetails_SUCCESS" correctly', () => {
    const personsResult = mockPersonDetails;
    const action = { type: actions.GET_PERSON_DETAILS_SUCCESS, personsResult };
    const reducer = fromPersonDetailsReducer.reducer(
      fromPersonDetailsReducer.initialState,
      action
    );
    const result = Object.keys(reducer.entities).map(
      (i) => reducer.entities[i]
    );
    expect(result).toEqual(personsResult);
  });

  it('should handle action "[PersonDetails] GET_PersonDetails" correctly', () => {
    const reducer = fromPersonDetailsReducer.reducer(
      fromPersonDetailsReducer.initialState,
      actions.getPersonDetails
    );
    expect(reducer.loading).toEqual(true);
  });

  it('should handle action "[PersonDetails] GET_PersonDetails" correctly', () => {
    const error = 'Test error';
    const action = { type: actions.GET_PERSON_DETAILS_ERROR, error };
    const reducer = fromPersonDetailsReducer.reducer(
      fromPersonDetailsReducer.initialState,
      action
    );
    expect(reducer.error).toEqual(true);
  });
});
