import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  id?: any;
  movie?: Movie;
  movieSub$?: Subscription;

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!

    this.movieSub$ = this.movieService.movie(this.id).subscribe(movie => {
      this.movie = movie;
    })
  }

  ngOnDestroy(): void {
    this.movieSub$?.unsubscribe()
  }

}
