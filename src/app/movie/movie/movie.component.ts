import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movie?: Movie

  constructor(
    private movieService: MovieService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  deleteMovie(id: number) {
    this.movieService.deleteMovie(id).subscribe(res => {
      this.router.navigate(['/'])
    })
  }

}
