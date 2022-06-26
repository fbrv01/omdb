import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

  ///common service to hanndle api data calls
export class BaseDataService {

  baseUrl: string;
  // private token: string;

  constructor(
    private http: HttpClient
    ){
    this.baseUrl = environment.baseurl;
  }


  makeGetCall(path: string): Observable<any> {
    // let headers = new HttpHeaders({'Authorization': 'bearer ' + this.getToken() });
    return this.http.get(this.constructUrl(path))
  }


  makePostCall(path: string, body: any): Observable<any> {
    let bodyJson = JSON.stringify(body);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' });
    return this.http.post(this.constructUrl(path), bodyJson, { headers: headers })
  }


  makePostCallImageUpload(path: string, form: any): Observable<any> {
    return this.http.post(this.constructUrl(path), form)
  }

  makePostDownloadCall(path: string, body: any): Observable<any> {
    let bodyJson = JSON.stringify(body);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' });
    return this.http.post(this.constructUrl(path), bodyJson, { headers: headers , responseType: 'blob'});
  }





  private constructUrl(path: string) {
    return this.baseUrl + path;
  }

}
