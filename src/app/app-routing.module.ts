import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchedMovieComponent } from './searched-movie/searched-movie.component';

const routes: Routes = [
  {path:'details/:imdbID',component:MovieDetailsComponent},
  {path:'home',component:MovieListComponent},
  {path:'search/:title',component:SearchedMovieComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
