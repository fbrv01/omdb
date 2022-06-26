import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Movie, MovieSearchResult } from '../../models/movies';
import { MovieService as MovieService } from '../../services/movie.service';
import { MoviesSharedService } from '../../services/movies-shared.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  searchString: string = '';
  type: string = 'movie';
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
  movies: Movie[] = [];
  isLoading: boolean = false;
  isResponse: boolean = false;
  constructor(private movieSaredService: MoviesSharedService, private movieService: MovieService) {



  }
  ngOnInit(): void {

    this.movieSaredService.getSearchString() //listening user input
      .pipe(takeUntil(this.destroy))
      .subscribe((searchString) => {
        this.searchString = searchString;
        if (this.searchString!=null) {

          console.log(searchString);
          this.getSearchResults(searchString);
        }

      });
  }
  selectedOption(event: any) {
    this.type = event; //get type
    console.log(this.type);
    this.getSearchResults(this.searchString);
  }

  getSearchResults(searchString: string) {
    this.isLoading = true;
    this.movieService.getSearchMovieData(searchString, this.type) //listening user input
      .pipe(takeUntil(this.destroy))
      .subscribe((movieList) => {
        this.isLoading = false;

        if (movieList.Response.toLowerCase() == "true") {

          this.movies = movieList.Search;
          this.isResponse = true;
        } else {
          this.isResponse = false;
        }
        // console.log(movieList);

      });
  }


}
