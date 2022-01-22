import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

// url: string= 'https://www.omdbapi.com/?s=superman&apikey=66ac83ae'

 getMovies():Observable<any[]>{
   return this.http.get<any[]>("https://omdbapi.com/?s=will&y=2021&apikey=66ac83ae");
 }

 getSelectedMovie(imdbID: any): Observable<any> {
  return this.http.get<any>(`http://www.omdbapi.com/?i=${imdbID}&apikey=66ac83ae`);
}

  searchedMovie(title:any):Observable<any[]>{
    return this.http.get<any[]>(`http://www.omdbapi.com/?s=${title}&apikey=66ac83ae`)
  }
  constructor(private http:HttpClient) { }
}
