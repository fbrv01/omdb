import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { MoviesSharedService } from 'src/app/movies/services/movies-shared.service';

//seperate component for search bar

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() searchEmt:EventEmitter <any> = new EventEmitter();
  constructor(private movieShared:MoviesSharedService) { } // calling the movie sevice
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1); /// listner for detect component destroy
  searchString: string='';
  ngOnInit(): void {
  }

  search() {

    this.movieShared.setSearchString(this.searchString); //setting user input through the service - two way binding

    // console.log(this.searchString);

  }

}
