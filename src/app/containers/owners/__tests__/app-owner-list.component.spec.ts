import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  platformBrowserDynamicTesting,
  BrowserDynamicTestingModule,
} from '@angular/platform-browser-dynamic/testing';
import { Store, StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { GenderModel } from 'src/app/core/models';
import { mockPersonDetails } from 'src/app/store/mockData/mock-persons-entities';
import { reducers, AppState } from 'src/app/store/reducers';
import { PersonDetailsDispatchers } from 'src/app/store/services';

import { AppOwnerListComponent as TestComponent } from '../app-owner-list.component';

describe('Component | App Owner List', () => {
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

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let store: Store<AppState>;
  let dispatcher: PersonDetailsDispatchers;

  beforeEach(async(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        StoreModule.forRoot(reducers, {
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          },
        }),
      ],
      declarations: [TestComponent],
      providers: [PersonDetailsDispatchers, provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    dispatcher = TestBed.inject(PersonDetailsDispatchers);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch get person details', () => {
    const dispatchSpy = spyOn(dispatcher, 'getPersonDetails');
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
  });

  it('should select 4 times', (done) => {
    const selectSpy = spyOn(store, 'select').and.callThrough();
    component.ngOnInit();
    expect(selectSpy).toHaveBeenCalledTimes(4);
    done();
  });

  it('should get person details', (done) => {
    const expectGenderPets: GenderModel[] = [
      {
        gender: 'Male',
        pets: [{ name: 'Garfield', type: 'Cat' }],
      },
      {
        gender: 'Female',
        pets: [{ name: 'Garfield', type: 'Cat' }],
      },
    ];
    component.ngOnInit();
    component.genderPetOwners$.subscribe((result) => {
      expect(result).toEqual(expectGenderPets);
      done();
    });
  });

  it('should get loading', (done) => {
    component.ngOnInit();
    component.loading$.subscribe((result) => {
      expect(result).toEqual(false);
      done();
    });
  });

  it('should get loaded', (done) => {
    component.ngOnInit();
    component.loaded$.subscribe((result) => {
      expect(result).toEqual(true);
      done();
    });
  });

  it('should get error', (done) => {
    component.ngOnInit();
    component.error$.subscribe((result) => {
      expect(result).toEqual(false);
      done();
    });
  });
});
