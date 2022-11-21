import { OptionsDialogComponent } from './../shared/options-dialog/options-dialog.component';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  text?: string;
  @Input() movie?: Movie;

  constructor(
    private movieService: MovieService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(OptionsDialogComponent)
  }

  deleteMovie(id: number) {
    this.movieService.deleteMovie(id).subscribe(res => {
      this.router.navigate(['/'])
    })
  }

}
