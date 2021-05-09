import { Injectable, Inject } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
// import {map} from 'rxjs-compat/operator/map';
import { map } from 'rxjs/operators/map';
@Injectable({
  providedIn: 'root'
})
export class StoreMoviesService {
  movielist: string[] = [];
  user;
  movies: AngularFireList<any>;
  item: any;
  fb: AngularFireDatabase;
  itemcount = 0;
  some;

  constructor(private db: AngularFireDatabase) {
    //   console.log(this.user);
    // this.movies = this.db.list('/users/' + 'hello');
  }

  // tslint:disable-next-line:typedef
  save(user: firebase.User) {
    this.user = user.uid;
    this.db.object('/user/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  // tslint:disable-next-line:typedef
  setpath() {
    this.movies = this.db.list('/user/' + this.user);
  }

  getitemCount() {
    if (this.movies !== undefined) {
      this.item = this.movies.valueChanges().subscribe(data => {
        this.itemcount = data.length - 2;
      });
      console.log(this.itemcount+'from service' + '/n');
    }
    return  this.itemcount;
  }
  // tslint:disable-next-line:typedef
  storeMovies(movie) {
    this.getitemCount();
    if (this.itemcount < 5) {
      //  this.movies.push(movie);
      this.db.object('/user/' + this.user).update({
        [movie]: movie
      });
      // this.itemcount++;
      this.item = this.movies.valueChanges().subscribe(data => {


        for (let i = 0; i < data.length - 2; i++) {
          this.movielist[i] = data[i];
        //  console.log(this.movielist[i]);
        }
      //  console.log(data.length + '/n');
      });
      console.log(this.movielist);
    }
  }

  // tslint:disable-next-line:typedef
  getMovies() {
    // this.item = this.movies.valueChanges().subscribe(data => {
    //   for (let i = 0 ; i < data.length - 2 ; i++)
    //   {
    //     this.movielist[i] = data[i];
    //     console.log(this.movielist[i]);
    //   }
    //   console.log('/n');
    // });
    return this.movielist;
  }

  deleteMovies(movie: string) {
    this.getMovies();
    if (movie)
      this.movies.remove(movie);
    for (let i = 0; i < this.movielist.length; i++) {

      if (this.movielist[i] === movie) {
        this.movielist.splice(i, 1);
        i--;
        this.itemcount--;
      }
    }
    return this.movielist;
  }
}
