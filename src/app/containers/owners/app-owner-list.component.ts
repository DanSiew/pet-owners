import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { GenderModel } from 'src/app/core/models';
import { AppState } from 'src/app/store/reducers';
import {
  getPersonDetails,
  getPersonDetailsLoaded,
  getPersonDetailsLoading,
  hasError,
} from 'src/app/store/selectors/person-details.selector';
import { PersonDetailsDispatchers } from 'src/app/store/services';
import { mapGenderPets } from '../helpers/pet-owner.function';

@Component({
  selector: 'app-owner-list',
  templateUrl: './app-owner-list.template.html',
  styleUrls: ['app-owner-list.styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppOwnerListComponent implements OnInit {
  public loading$: Observable<boolean>;
  public loaded$: Observable<boolean>;
  public genderPetOwners$: Observable<GenderModel[]>;
  public errorMessage = 'System error, please refer to customer support.';
  public error$: Observable<boolean>;

  constructor(
    private dispatchers: PersonDetailsDispatchers,
    private store: Store<AppState>
  ) {}

  public ngOnInit(): void {
    this.dispatchers.getPersonDetails();
    this.loading$ = this.store.select(getPersonDetailsLoading);
    this.loaded$ = this.store.select(getPersonDetailsLoaded);
    this.genderPetOwners$ = this.store.select(getPersonDetails).pipe(
      filter((data) => !!data),
      map((data) => {
        return mapGenderPets(data);
      })
    );

    this.error$ = this.store.select(hasError);
  }
}
