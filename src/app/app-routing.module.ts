import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslationComponent } from './modules/translation/translation.component';
import { TranslationListInactivesComponent } from './modules/translation/components/translation-list-inactives/translation-list-inactives.component';

const routes: Routes = [
  { path: 'translator', component: TranslationComponent },
  {path: 'translation-inactives', component: TranslationListInactivesComponent},
  { path: '', redirectTo: '/translator', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
