import { mockPersonDetails } from 'src/app/store/mockData/mock-persons-entities';
import * as PersonActions from '../person-details.actions';

describe('Store | Person Actions', () => {
  it('Should create get person details action', () => {
    const action = PersonActions.getPersonDetails();
    expect(action.type).toEqual(PersonActions.GET_PERSON_DETAILS);
  });

  it('Should create get person details success action containing a payload', () => {
    const personsResult = mockPersonDetails;
    const action = PersonActions.getPersonDetailsSuccess({
      personsResult,
    });

    expect({ ...action }).toEqual({
      type: PersonActions.GET_PERSON_DETAILS_SUCCESS,
      personsResult,
    });
  });

  it('Should create get person details loading action', () => {
    const loading = true;
    const action = PersonActions.setPersonDetailsLoading({ loading });
    expect(action.type).toEqual(PersonActions.GET_PERSON_DETAILS_LOADING);

    expect({ ...action }).toEqual({
      type: PersonActions.GET_PERSON_DETAILS_LOADING,
      loading,
    });
  });

  it('Should create get person details error action', () => {
    const error = { error: '' };
    const action = PersonActions.getPersonDetailsError({ error });
    expect(action.type).toEqual(PersonActions.GET_PERSON_DETAILS_ERROR);

    expect({ ...action }).toEqual({
      type: PersonActions.GET_PERSON_DETAILS_ERROR,
      error,
    });
  });
});
