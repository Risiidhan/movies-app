import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-searched-movie',
  templateUrl: './searched-movie.component.html',
  styleUrls: ['./searched-movie.component.css']
})
export class SearchedMovieComponent implements OnInit {

  movie:any[]=[]

  hi(){
    console.log(2);
    
  }

  searchedMovie(){
    const title = String(this.route.snapshot.paramMap.get('title'));
    this.mService.searchedMovie(title)
      .subscribe(movie => this.movie = movie)
    
  }

  constructor(
    private route:ActivatedRoute,
    private mService:MovieServiceService
    ) { }

  ngOnInit(): void {
    this.searchedMovie();
    this.hi();
  }

}
