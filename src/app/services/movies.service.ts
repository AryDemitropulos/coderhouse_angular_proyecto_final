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
        URLTrailerYoutube,
      }) => {
        console.log('mapeando');
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
            trailer: URLTrailerYoutube.replace('watch?v=', 'embed/').split(
              '&t='
            )[0],
          },
        };
      }
    );
  }

  getMovie(id: string): Movie {
    return this.getMovies().find((el) => el.id == id)!;
  }
  constructor() {}
}
