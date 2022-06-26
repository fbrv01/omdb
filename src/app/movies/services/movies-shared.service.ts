import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../models/movies';

@Injectable({
  providedIn: 'root'
})

//services for communicate component to component

export class MoviesSharedService {
  /// behavior to detect user typing on search bar
  private searchStringSubject = new BehaviorSubject(null);
  //behavior to check added to wish list
  private wishlitSubject = new BehaviorSubject(null);

  constructor() { }

  setSearchString(searchString: any) {
    // sending user input value
    this.searchStringSubject.next(searchString);
  }

  getSearchString(): Observable<any> {
    // listening user entering a input
    return this.searchStringSubject.asObservable();
  }

  setWishlist(wishlistArr: any) {
    this.wishlitSubject.next(wishlistArr);
  }

  getWishlist(): Observable<any> {
    // listening user entering a input
    return this.wishlitSubject.asObservable();
  }
}
