import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Movie } from '../../interfaces/Movie';

@Component({
  selector: 'app-cart-without-table',
  templateUrl: './cart-without-table.component.html',
  styleUrls: ['./cart-without-table.component.css'],
})
export class CartWithoutTableComponent implements OnInit {
  movies: Movie[] = [];
  moviesId: string[];
  constructor(private cartService: CartService) {
    this.movies = cartService.getMovies();
  }
  ngOnInit(): void {}

  deleteFromCart(id: string) {
    console.log('test');
    this.cartService.deleteFromCart(id);
  }
  getTotal() {
    return this.movies
      .map((movie) => movie.price)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
      .toString();
  }
}
