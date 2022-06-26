import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ // loading movies as default page
  path: '',
  loadChildren: () =>
    import('./movies/movies.module').then((m) => m.MoviesModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
