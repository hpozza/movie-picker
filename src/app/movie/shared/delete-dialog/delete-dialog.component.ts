import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  movieId?: number;

  constructor(private movieService: MovieService, private router: Router) {
  }

  ngOnInit(): void {
    this.movieService.subject$.subscribe(res => {
      this.movieId = res
      console.log(res)
    })
  }

  deleteMovie(id: number) {
    this.movieService.deleteMovie(id).subscribe(res => {
      this.router.navigate(['/'])
    })
  }

}
