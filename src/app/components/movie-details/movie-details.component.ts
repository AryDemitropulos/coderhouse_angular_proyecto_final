import { Component, Input, OnInit } from '@angular/core';
import { MovieDetail } from '../../interfaces/MovieDetail';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  @Input() detail: MovieDetail;
  actors: string[];
  directors: string[];
  constructor() {}

  ngOnInit(): void {
    this.actors = this.getPeopleByType('A');
    this.directors = this.getPeopleByType('D');
  }

  getPeopleByType(type: string): string[] {
    return this.detail.personList
      .filter((person) => person.Type == type)
      .map((person) => person.Name);
  }

  getDirectors() {
    return this.directors.join(', ');
  }

  getActors() {
    return this.actors.join(', ');
  }
}
