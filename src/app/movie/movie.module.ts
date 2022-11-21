import { AppMaterialModule } from './shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieComponent } from './movie/movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OptionsDialogComponent } from './shared/options-dialog/options-dialog.component';
import { DeleteDialogComponent } from './shared/delete-dialog/delete-dialog.component';



@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    MovieComponent,
    AddMovieComponent,
    OptionsDialogComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule
  ]
})
export class MovieModule { }
