import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class SearchComponent {
  baseuri = 'http://www.omdbapi.com/?s=';
  induri = 'http://www.omdbapi.com/?t=';
  val = 'x-men';
  filter = '&type=movie';
  apikey = '&apikey=98027472';
  results;
  showresult: boolean;
  constructor(public http: HttpClient) {
    http.get( this.baseuri + this.val + this.filter + this.apikey)
      .subscribe(response => {
        console.log(response);
      });
  }
  // tslint:disable-next-line:typedef
  getSearchVal(val)
  {
    this.val = val;
    console.warn(val);
  }

  // tslint:disable-next-line:typedef
  getResult()
  {
    this.http.get(this.baseuri + this.val + this.filter + this.apikey)
      .subscribe(response => {
        this.results = response;
        console.log(this.results);
        this.showresult = true;
      });

  }
}
