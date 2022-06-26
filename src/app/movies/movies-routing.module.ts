import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

const routes: Routes = [
  { // loading movies as default page
    path: '',
    component: MoviesComponent
  },
  { // loading movies as default page
    path: 'wishlist',
    component: WishlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
