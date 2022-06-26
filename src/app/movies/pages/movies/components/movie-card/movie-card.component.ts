import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/movies/models/movies';
import { MoviesSharedService } from 'src/app/movies/services/movies-shared.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  constructor(private movieSaredService: MoviesSharedService) { }
  @Input() movieInput: any;
  movie: any;
  wishListArray: Movie[] = [];
  isOnwishlist: boolean = false;
  
  ngOnInit(): void {
    if (localStorage.getItem("wishlist") != null) {
      var wish: any = localStorage.getItem('wishlist');
      this.wishListArray = JSON.parse(wish);
    }
    let obj = this.wishListArray.find(o => o.imdbID === this.movie.imdbID);
    if (obj !== undefined) {
      this.isOnwishlist = true;
    }
  }

  ngOnChanges() {
    this.movie = this.movieInput;
  }

  addtoWishlist(movie: Movie) {
    let obj = this.wishListArray.filter(person => person.imdbID == movie.imdbID);
    if (localStorage.getItem('wishlist') == null) {
      this.wishListArray = [];
    } else {
      var wish: any = localStorage.getItem('wishlist');
      this.wishListArray = JSON.parse(wish);
    }
    if (obj.length == 0) {
      this.wishListArray.push(movie);
      this.isOnwishlist = true;
    } else {
      const index = this.wishListArray.indexOf(movie);
      this.wishListArray = this.wishListArray.filter(m => m.imdbID != movie.imdbID);
      this.isOnwishlist = false;
    }
    localStorage.setItem('wishlist', JSON.stringify(this.wishListArray))
    this.movieSaredService.setWishlist(this.wishListArray);
  }


  checkIsonWishlist(movie: Movie) {
    let obj = this.wishListArray.find(o => o.imdbID === movie.imdbID);
    return obj === undefined;
  }


}
