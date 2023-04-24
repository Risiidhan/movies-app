import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  
  constructor(private http:HttpClient) { }


  url: string= 'https://www.omdbapi.com/?'
  BannerUrl: string= 'https://api.themoviedb.org/3'
  key:string = '08cc33bd5ae3a747598ce2ad84376e66';



 getBanners(){
   return this.http.get<any[]>(`${this.BannerUrl}/trending/all/week?api_key=${this.key}`);
 }

 getTrends(){
  return this.http.get<any[]>(`${this.BannerUrl}/trending/movie/day?api_key=${this.key}`);
}

 getTamilMovies():Observable<any[]>{ 
  return this.http.get<any[]>(`${this.BannerUrl}/discover/movie?api_key=${this.key}&with_original_language=ta&year=2023`);
}

 getSelectedMovie(id: any): Observable<any> {
  return this.http.get<any>(`${this.BannerUrl}/movie/${id}?api_key=${this.key}`);
}

  searchedMovie(title:any):Observable<any[]>{
    return this.http.get<any[]>(`${this.BannerUrl}/search/movie?api_key=${this.key}&query=${title}`)
  }
}
