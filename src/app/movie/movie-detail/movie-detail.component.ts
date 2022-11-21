import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private navbarService: NavbarService
    ) { }

  id?: number;
  movie?: Movie;
  movieSub$?: Subscription;

  ngOnInit(): void {
    this.id = +Number(this.route.snapshot.paramMap.get('id'))!

    this.movieSub$ = this.movieService.moviesFromHttp(this.id).subscribe(movie => {
      this.movie = movie;
      this.navbarService.title?.next(movie!.title)
      this.movieService.emitMovieId(movie.id)
  })
  }

  ngOnDestroy(): void {
    this.movieSub$?.unsubscribe()
  }

}
