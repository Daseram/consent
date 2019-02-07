import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiveConsentComponent } from './consent/give-consent/give-consent.component';
import { CollectedConsentComponent } from './consent/collected-consent/collected-consent.component';

const routes: Routes = [
  {path: '', component: GiveConsentComponent},
  {path: 'collected', component: CollectedConsentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
