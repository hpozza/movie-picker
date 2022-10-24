import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Movie, movies } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private ROOT_URL = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) { }

  getMoviesFromHttp() {
    return this.http.get<Movie[]>(this.ROOT_URL)
  }

  moviesFromHttp(id: any) {
    return this.http.get<Movie>(`${this.ROOT_URL}/${id}`)
  }

  getMovies() {
    return of(movies)
  }

  movie(id : number) {
    return of(
      movies.find(movie => +movie.id === +id)
    )
  }
}
