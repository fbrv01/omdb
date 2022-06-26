import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Movie } from '../../models/movies';
import { MovieService } from '../../services/movie.service';
import { MoviesSharedService } from '../../services/movies-shared.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishListArray: Movie[] = [];
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
  constructor(private movieSaredService: MoviesSharedService, private movieService: MovieService) {

    this.movieSaredService.getWishlist() //listening wishlist updated
    .pipe(takeUntil(this.destroy))
    .subscribe((wishListArray) => {
      this.wishListArray = wishListArray;
    });

  }

  ngOnInit(): void {
    if (localStorage.getItem("wishlist") != null) {
      var wish: any = localStorage.getItem('wishlist');
      this.wishListArray = JSON.parse(wish);


    } else {
      this.wishListArray = [];
    }
console.log(this.wishListArray);

  }

}
