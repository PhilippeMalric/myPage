import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './pages/first/first.component';
import { HomeComponent } from './pages/home/home.component';
import { ObjectifComponent } from './pages/myPages/objectif/objectif.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'objectif', component: ObjectifComponent },
  { path: 'maison', component: HomeComponent },
  { path: 'aws', component: FirstComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
