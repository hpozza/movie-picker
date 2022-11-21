import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject, Observable, BehaviorSubject } from 'rxjs';
import { Movie, movies } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private ROOT_URL = 'http://localhost:3000/movies';

  subject = new BehaviorSubject<any>(0);
  subject$ = this.subject.asObservable();

  constructor(private http: HttpClient) { }

  emitMovieId(id: any) {
    this.subject.next(id);
  }

  getMoviesFromHttp() {
    return this.http.get<Movie[]>(this.ROOT_URL)
  }

  addMovie(movie: Movie) {
    return this.http.post(this.ROOT_URL, movie)
  }

  deleteMovie(id: number) {
    return this.http.delete(`${this.ROOT_URL}/${id}`)
  }

  moviesFromHttp(id: any) {
    return this.http.get<Movie>(`${this.ROOT_URL}/${id}`)
  }

  getMovies() {
    return of(movies)
  }

  movie(id : number) {
    return of(
      movies.find(movie => +Number(movie.id) === +id)
    )
  }
}
