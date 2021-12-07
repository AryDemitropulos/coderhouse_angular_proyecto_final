import { Component, OnInit } from '@angular/core';
import moviesData from 'src/app/data/moviesData';
import { Movie } from '../../interfaces/Movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  movieList: Movie[];

  constructor(public moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movieList = this.moviesService.getMovies();
  }
}
