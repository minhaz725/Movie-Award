import {ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {NominateMoviesService} from '../nominate-movies.service';
import {StoreMoviesService} from '../store-movies.service';
import {AuthService} from '../auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nominate',
  templateUrl: './nominate.component.html',
  styleUrls: ['./nominate.component.css'],
})
export class NominateComponent{

  @Input() data: string;
  user: string;
  button: boolean;
  buttonStatus = 'Nominate';
  constructor(private movieservice: NominateMoviesService,
              private storeservice: StoreMoviesService,
              private authService: AuthService) {
      this.authService.user$.subscribe(user => {
      // if (user) {
        console.log(user);
        this.storeservice.save(user);
        this.storeservice.setpath();
      // }
    });
  }


  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  setMovie(){
    console.log(this.movieservice.movielist);
    this.movieservice.emit(this.data);
    this.button = true;
    this.buttonStatus = 'Nominated';
    this.storeservice.storeMovies(this.data);
  }

}
