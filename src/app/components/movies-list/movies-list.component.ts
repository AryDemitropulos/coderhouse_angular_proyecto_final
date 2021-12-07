import { Component, OnInit } from '@angular/core';
import moviesData from 'src/app/data/moviesData';
import { Movie } from '../../interfaces/Movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  movieList: Movie[];

  constructor() {}

  ngOnInit(): void {
    this.movieList = moviesData.map(
      ({
        name,
        id,
        URLPoster,
        description,
        duration,
        category,
        personList,
      }) => {
        return {
          name,
          price: (Math.floor(Math.random() * 50) + 1).toString(),
          id,
          img: URLPoster,
          detail: {
            description: description,
            duration,
            category,
            personList,
          },
        };
      }
    );
  }
}
