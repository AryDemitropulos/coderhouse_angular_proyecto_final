import { Component, OnInit, OnDestroy } from '@angular/core';
import moviesData from 'src/app/data/moviesData';
import { Movie } from '../../interfaces/Movie';
import { MoviesService } from '../../services/movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit, OnDestroy {
  movieList: Movie[];
  subscription: Subscription;
  constructor(public moviesService: MoviesService) {}

  ngOnInit(): void {
    this.subscription = this.moviesService.getMovies().subscribe((data) => {
      this.movieList = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
