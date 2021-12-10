import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Movie } from '../../interfaces/Movie';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['name', 'price', 'actions'];
  movies: Movie[] = [];
  moviesId: string[];
  source = new MatTableDataSource<Movie>([]);
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.source = this.source;
    this.refresh();
  }

  refresh() {
    /* this.cartService.getMovies().subscribe((data: Movie[]) => {
      this.source.data = data;
      this.movies = data;
      console.log('changed!');
    });*/
  }

  getMovies() {
    this.source.data = this.movies;
  }
  getTotal() {
    return this.movies
      .map((movie) => movie.price)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
      .toString();
  }

  deleteFromCart(id: string) {
    console.log('test');
    this.cartService.deleteFromCart(id);
  }
}
