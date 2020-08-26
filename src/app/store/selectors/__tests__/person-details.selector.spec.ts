import { async } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { mockPersonDetails } from 'src/app/store/mockData/mock-persons-entities';
import { reducers, AppState } from '../../reducers';
import {
  getPersonDetails,
  getPersonDetailsLoaded,
  getPersonDetailsLoading,
  hasError,
} from '../person-details.selector';

describe('Person Details Selectors', () => {
  const initialState = {
    entityCache: {
      personDetails: {
        ids: [1, 2],
        loading: false,
        error: false,
        loaded: true,
        entities: mockPersonDetails,
      },
    },
  };
  let store: Store<AppState>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, {
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          },
        }),
      ],
      declarations: [],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  }));
  describe('selectPersonDetails', () => {
    it('should return call the getPersonDetails', (done) => {
      store.select(getPersonDetails).subscribe((result) => {
        expect(result).toEqual(mockPersonDetails);
        done();
      });
    });

    it('should return call the getPersonDetailsLoading', (done) => {
      store.select(getPersonDetailsLoading).subscribe((result) => {
        expect(result).toEqual(false);
        done();
      });
    });

    it('should return call the getPersonDetailsLoaded', (done) => {
      store.select(getPersonDetailsLoaded).subscribe((result) => {
        expect(result).toEqual(true);
        done();
      });
    });

    it('should return call the hasError', (done) => {
      store.select(hasError).subscribe((result) => {
        expect(result).toEqual(false);
        done();
      });
    });
  });
});
