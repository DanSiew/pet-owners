import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { PersonModel } from 'src/app/core/models';
import * as PersonDetailsActions from '../actions';
import { PersonDetailsDataService } from '../services/person-details-data.services';

@Injectable()
export class PersonDetailsEffects {
  constructor(
    private actions$: Actions,
    private personDetailsDataService: PersonDetailsDataService
  ) {}

  getPersonDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonDetailsActions.getPersonDetails),
      exhaustMap(() =>
        this.personDetailsDataService.getPersonDetails().pipe(
          map((result: any[]) => {
            let i = 0;
            const personsResult: PersonModel[] = result.map((p) => ({
              ...p,
              id: ++i,
            }));
            return PersonDetailsActions.getPersonDetailsSuccess({
              personsResult,
            });
          }),
          catchError((error) =>
            of(PersonDetailsActions.getPersonDetailsError({ error }))
          )
        )
      )
    )
  );
}
