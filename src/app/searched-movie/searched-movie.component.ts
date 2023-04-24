import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-searched-movie',
  templateUrl: './searched-movie.component.html',
  styleUrls: ['./searched-movie.component.css']
})
export class SearchedMovieComponent implements OnInit {

  movie:any[]=[]

  searchedMovie(){
    const title = String(this.route.snapshot.paramMap.get('title'));
    this.mService.searchedMovie(title)
      .subscribe((movie:any) => {
        this.movie = movie.results
      }
      )
    
  }

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private mService:MovieServiceService
    ) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.searchedMovie();
  }

}
