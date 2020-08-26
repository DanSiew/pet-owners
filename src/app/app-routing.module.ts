import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppOwnerListComponent } from './containers/owners/app-owner-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppOwnerListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
