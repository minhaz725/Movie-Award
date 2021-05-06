import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// @ts-ignore

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  baseuri = 'http://www.omdbapi.com/?t=';
  val = 'x-men';
  apikey = '&apikey=98027472';
  result;
  showresult: boolean;
  constructor(private http: HttpClient) {
    http.get( this.baseuri + this.val + this.apikey)
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
    this.http.get(this.baseuri + this.val + this.apikey)
      .subscribe(response => {
        this.result = response;
        console.log(this.result);
        this.showresult = true;
      });

  }


}
