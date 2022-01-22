import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  selectedMovie?:any;

  onSelect(movie:any){
    this.selectedMovie=movie
    console.log(this.selectedMovie.Title)
  }
  
  movies:any[]=[];

  constructor(private mService : MovieServiceService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){ 
    this.mService.getMovies()
      .subscribe(data=>{
        this.movies=data;
        console.log(this.movies);
      })
  }

} 
