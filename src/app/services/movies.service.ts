import { Injectable } from '@angular/core';
import moviesData from '../data/moviesData';
import { Movie } from '../interfaces/Movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  getMovies(): Movie[] {
    return moviesData.map(
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
          price: Math.floor(Math.random() * 50) + 1,
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
  constructor() {}
}
