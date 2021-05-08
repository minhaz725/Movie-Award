import {Component, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef, Input} from '@angular/core';
import {NominateMoviesService} from '../nominate-movies.service';
import {StoreMoviesService} from '../store-movies.service';
import {AuthService} from '../auth.service';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs/observable';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit{
  movielist: string[] = [];
  send = true;
  alert: boolean;
  len = 0;
  user: string;
  moviedb: AngularFireList<any>;
  movieid$: any;
  constructor(private movieservice: NominateMoviesService ,
              private storeservice: StoreMoviesService,
              private db: AngularFireDatabase
              ) { }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.movielist = this.storeservice.getMovies();

    if (this.len >= 5)
    {
      this.alert = true;
    }
  }
  // tslint:disable-next-line:typedef
  closeAlert()
  {
    this.alert = false;
  }
  // tslint:disable-next-line:typedef
  removeMovie(data){
    // if (this.len >= 5) { return this.movielist; }
    //  else {
    // for (let i = 0; i < this.movielist.length; i++){
    //
    //   if ( this.movielist[i] === data) {
    //     this.movielist.splice(i, 1);
    //     i--;
    //     this.len--;
    //   }
    // }
  //  this.movieservice.emit('Nominate');
  //  console.log(this.movieid$);
    this.movielist = this.storeservice.deleteMovies(data);
    return this.movielist;
    // }
  }
}

/*
ngOnInit() {
    this.movieservice.on<string>().subscribe(
      data => {
        if (data !== undefined && this.len < 5) {
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < this.movielist.length; i++){

            if ( this.movielist[i] === data) {
              this.send = false;
              break;
            }
          }
          if (this.send){
            this.movielist[this.len] = data;
            this.len++;
          }
          this.send = true;
          if (this.len >= 5)
          {
            this.alert = true;
          }
        }
      }
    );
  }
 */
