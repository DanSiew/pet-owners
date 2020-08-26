import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import * as PersonDetailsActions from '../actions';
import { AppState } from '../reducers';

@Injectable()
export class PersonDetailsDispatchers {
  constructor(private store: Store<AppState>) {}

  public getPersonDetails() {
    this.dispatchLoading();
    this.dispatch(PersonDetailsActions.getPersonDetails());
  }

  private dispatch = (action: Action) => this.store.dispatch(action);
  private dispatchLoading = () =>
    this.dispatch(
      PersonDetailsActions.setPersonDetailsLoading({ loading: true })
    );
}
