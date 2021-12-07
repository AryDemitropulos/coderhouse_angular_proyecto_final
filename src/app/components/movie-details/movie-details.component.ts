import { Component, Input, OnInit } from '@angular/core';
import { MovieDetail } from '../../interfaces/MovieDetail';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  @Input() detail: MovieDetail;
  constructor() {}

  ngOnInit(): void {}
}
