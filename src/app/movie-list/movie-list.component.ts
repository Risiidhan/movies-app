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
  }
  
  movies:any[]=[];
  series:any[]=[];

  constructor(private mService : MovieServiceService) { }

  ngOnInit(): void {
    this.getMovies();
    this.getSeries();
  }

  getMovies(){ 
    this.mService.getMovies()
      .subscribe((data :any)=>{
        this.movies=data.Search;
      })
  }

  getSeries(){ 
    this.mService.getSeries()
      .subscribe((data :any)=>{
        this.series=data.Search;
      })
  }

} 
