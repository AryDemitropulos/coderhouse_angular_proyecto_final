import { Injectable } from '@angular/core';
import { MoviesService } from './movies.service';
import { Movie } from '../interfaces/Movie';
import moviesData from '../data/moviesData';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private moviesInCart: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  togleMovieInCart(id: string) {
    if (id && this.isMovieInCart(id)) {
      this.deleteFromCart(id);
    } else {
      this.addMovie(id);
    }
    this;
  }
  isMovieInCart(id: string) {
    return this.getMoviesId().includes(id);
  }

  addMovie(id: string) {
    const movie = this.moviesService
      .getMovies()
      .find((movie) => movie.id == id);
    if (movie) this.moviesInCart.push(movie);
  }
  deleteFromCart(id: string) {
    const index = this.getMoviesId().indexOf(id);
    if (index > -1) {
      this.moviesInCart.splice(index, 1);
    }
  }

  getNumberOfItemsInCart(): number {
    return this.moviesInCart.length;
  }
  getMovies(): Observable<Movie[]> {
    return of(this.moviesInCart);
  }

  /*
  getMovies(): Movie[] {
    //Posiblemente tenga que trabajar con observables... no estaria funcionando este metodo, no se actualiza
    /*return this.moviesService
      .getMovies()
      .filter((movie) => this.moviesInCart.includes(movie.id));
  }*/

  getMoviesId(): string[] {
    return this.moviesInCart.map((movie) => movie.id);
  }
}
