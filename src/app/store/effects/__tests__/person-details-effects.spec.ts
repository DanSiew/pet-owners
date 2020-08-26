import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {
  platformBrowserDynamicTesting,
  BrowserDynamicTestingModule,
} from '@angular/platform-browser-dynamic/testing';
import { ofType } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store, StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of, ReplaySubject } from 'rxjs';

import * as personActions from 'src/app/store/actions/person-details.actions';
import { mockPersonResult } from 'src/app/store/mockData/mock-persons';
import { reducers, AppState } from 'src/app/store/reducers';
import { PersonDetailsDataService } from 'src/app/store/services/person-details-data.services';
import { mockPersonDetails } from '../../mockData/mock-persons-entities';
import { PersonDetailsEffects } from '../person-details.effects';

describe('Person Details Effects', () => {
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

  let effects: PersonDetailsEffects;
  let store: Store<AppState>;
  let service: PersonDetailsDataService;
  let actions: ReplaySubject<any>;

  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot(reducers, {
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          },
        }),
      ],
      providers: [
        PersonDetailsEffects,
        PersonDetailsDataService,
        provideMockActions(() => actions),
        provideMockStore({ initialState }),
      ],
    }).compileComponents();

    effects = TestBed.inject(PersonDetailsEffects);
    service = TestBed.inject(PersonDetailsDataService);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('getpersonDetails$', () => {
    beforeEach(() => {
      actions = new ReplaySubject(1);
    });

    it('sets the person results when none exists', (done) => {
      const action = personActions.getPersonDetails();
      const personsResult = mockPersonResult;
      jasmine
        .createSpy('getPersonDetails$')
        .and.returnValue(of(mockPersonResult));

      actions.next(action);
      effects.getPersonDetails$
        .pipe(ofType(personActions.getPersonDetails))
        .subscribe(() => {
          expect(service.getPersonDetails).toHaveBeenCalled();
          expect(
            personActions.getPersonDetailsSuccess({
              personsResult,
            })
          ).toHaveBeenCalled();
        });

      done();
    });
  });
});
