import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
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

  handleClick(event: any){
    var clickedComponent = event.target;
    console.log(event.target,'adsadasdas');
    var inside = false;
    do {
        if (clickedComponent === this.eRef.nativeElement) {
            inside = true;
        }
        clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    if(inside){
        console.log('inside');
    }else{
        console.log('outside');
    }
}

@Output() public clickOutside = new EventEmitter();

    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement: any) {
        const clickedInside = this.eRef.nativeElement.contains(targetElement);
        console.log('clicked')
        if (!clickedInside) {
            this.clickOutside.emit(null);
            console.log('clicked out')
        }
    }

  @Input() movie?: Movie

  constructor(
    private movieService: MovieService,
    private router: Router,
    private eRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  consolelog() {
    return 
  }

  deleteMovie(id: number) {
    this.movieService.deleteMovie(id).subscribe(res => {
      this.router.navigate(['/'])
    })
  }

}
