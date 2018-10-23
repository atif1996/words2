import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SightWordsComponent } from './sight-words/sight-words.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{ path: '', component: AppComponent },
  { path: '', component: SightWordsComponent },
  { path: 'sightWords', component: SightWordsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
