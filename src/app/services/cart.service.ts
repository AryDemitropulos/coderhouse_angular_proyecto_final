import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  moviesInCart: string[] = [];

  constructor() {}

  togleMovieInCart(id: string) {
    if (id && this.moviesInCart.includes(id)) {
      this.moviesInCart = this.moviesInCart.filter((el) => el != id);
    } else {
      this.moviesInCart.push(id);
    }
  }

  isMovieInCart(id: string) {
    return this.moviesInCart.includes(id);
  }

  getNumberOfItemsInCart(): number {
    return this.moviesInCart.length;
  }
}
