import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseDataService } from 'src/app/core/services/base-data.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService{

  constructor(private baseDataService:BaseDataService) { }


  getSearchMovieData(searchString:string,type:string):Observable<any>{
    return this.baseDataService.makeGetCall('&s='+searchString+'&type='+type)
  }
}
