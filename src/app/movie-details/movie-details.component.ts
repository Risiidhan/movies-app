import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie:any|undefined;
  constructor(
    private route:ActivatedRoute,
    private mService:MovieServiceService,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.getMovie()
  }

  getMovie(): void {
    const imdbID = String(this.route.snapshot.paramMap.get('imdbID'));
    this.mService.getSelectedMovie(imdbID)
      .subscribe(movie => {
        this.movie = movie;
        console.log(movie);
        console.log(imdbID);

      });
  }  

  goBack(): void {
    this.location.back();
  }

}
