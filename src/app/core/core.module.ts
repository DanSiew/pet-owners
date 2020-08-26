import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { throwIfAlreadyLoaded } from './module-import-check';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [],
  exports: [],
  providers: [],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
