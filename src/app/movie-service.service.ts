import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  
  constructor(private http:HttpClient) { }


  url: string= 'https://www.omdbapi.com/?'

 getMovies():Observable<any[]>{
   return this.http.get<any[]>(`${this.url}s=dragon&type=movie&apikey=66ac83ae`);
 }

 getSeries():Observable<any[]>{
  return this.http.get<any[]>(`${this.url}s=will&year=2023&type=series&apikey=66ac83ae`);
}

 getSelectedMovie(imdbID: any): Observable<any> {
  return this.http.get<any>(`${this.url}i=${imdbID}&apikey=66ac83ae`);
}

  searchedMovie(title:any):Observable<any[]>{
    return this.http.get<any[]>(`${this.url}s=${title}&apikey=66ac83ae`)
  }
}
