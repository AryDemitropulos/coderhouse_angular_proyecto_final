import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Movie } from '../../interfaces/Movie';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  movies: Movie[] = [];
  source = new MatTableDataSource<Movie>([]);
  subscription: Subscription;

  displayedColumns: string[] = ['image', 'name', 'price', 'actions'];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.refreshMovies(this.cartService.getMovies());
    this.subscription = this.cartService.getMovies$().subscribe((movies) => {
      this.refreshMovies(movies);
    });
  }

  refreshMovies(movies: Movie[]) {
    this.movies = movies;
    this.source.data = movies;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getTotal() {
    return this.movies
      .map((movie) => movie.price)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
      .toString();
  }

  deleteFromCart(id: string) {
    this.cartService.deleteFromCart(id);
  }
}
