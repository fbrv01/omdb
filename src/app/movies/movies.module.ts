import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './pages/movies/movies.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './pages/movies/components/search-bar/search-bar.component';
import { MovieListComponent } from './pages/movies/components/movie-list/movie-list.component';
import { MovieCardComponent } from './pages/movies/components/movie-card/movie-card.component';
import { ComponentsComponent } from './pages/wishlist/components/components.component';
//this is the seperate module for movies
//basically we take each page as module

@NgModule({
  declarations: [
    MoviesComponent,
    WishlistComponent,
    SearchBarComponent,
    MovieListComponent,
    MovieCardComponent,
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,

  ],exports:[ MovieListComponent,
    MovieCardComponent]   //im exporting movie cards to global so ican use it from other modules as common coponent
})
export class MoviesModule { }
