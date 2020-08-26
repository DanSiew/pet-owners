import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { effects } from './effects';
import { reducers } from './reducers';
import { PersonDetailsDispatchers } from './services';
import { PersonDetailsDataService } from './services/person-details-data.services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('entityCache', reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [PersonDetailsDataService, PersonDetailsDispatchers],
  exports: [StoreModule, EffectsModule],
})
export class AppStoreModule {}
