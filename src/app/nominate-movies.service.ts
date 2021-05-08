import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NominateMoviesService {

  // @ts-ignore
  public subject = new BehaviorSubject<any>();
  movielist: string[] = [];
  temp: string[] = [];
  len = 0;
  constructor() { }
  // tslint:disable-next-line:typedef
  emit<T>(data: T){
    this.subject.next(data);
  }
  on<T>(): Observable<T>{
    return this.subject.asObservable();
  }
}
