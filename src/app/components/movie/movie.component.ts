import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  showDetail: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleDetail() {
    this.showDetail = !this.showDetail;
  }

  addToCart() {
    console.log('Agregado al carro');
  }
}
