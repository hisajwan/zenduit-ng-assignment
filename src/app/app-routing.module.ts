import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmissionsComponent } from './organisms/submissions/submissions.component';
import { PageNotFoundComponent } from './organisms/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'submissions',
    pathMatch: 'full'
  },
  {
    path: 'submissions',
    component: SubmissionsComponent,
  },
  {path: '**', redirectTo: 'page-not-found'},
  {path: 'page-not-found', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
