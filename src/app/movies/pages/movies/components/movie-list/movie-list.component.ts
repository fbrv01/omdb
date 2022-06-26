import { Component, Input, OnInit } from '@angular/core';
import { MoviesSharedService } from 'src/app/movies/services/movies-shared.service';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { Movie } from 'src/app/movies/models/movies';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
  @Input() movies: any;
  moviesList: Movie[] = [];



  ngOnInit(): void {
  }
  ngOnChanges() {
    this.moviesList = this.movies;


   }
}
