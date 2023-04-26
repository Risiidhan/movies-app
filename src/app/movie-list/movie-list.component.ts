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
  TamilMovies:any[]=[];
  banners:any[]=[];
  isMobile = false;

  constructor(private mService : MovieServiceService) { }

  ngOnInit(): void {
    this.getMovies();
    this.getBanner();
    this.getTamilMovies();
    this.onResize();
  }

  onResize(){
    if(window.screen.width <= 600){
      this.isMobile = true
    } else{
      this.isMobile = false;
    }
    console.log(this.isMobile,window.screen.width);
  }

  getBanner(){
    this.mService.getBanners()
    .subscribe((data :any)=>{
      this.banners=data.results ;
    })
  }

  getMovies(){ 
    this.mService.getTrends()
      .subscribe((data :any)=>{
        this.movies=data.results;
      })
  }

  getTamilMovies(){ 
    this.mService.getTamilMovies()
      .subscribe((data :any)=>{
        this.TamilMovies=data.results;
      })
  }

} 
