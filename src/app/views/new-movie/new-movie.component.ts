import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';
import { MoviesService } from '../../services/movies.service';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css'],
})
export class NewMovieComponent implements OnInit {
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private movieService: MoviesService
  ) {
    this.form = fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [
        0,
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(1),
        ],
      ],
      imgUrl: ['', [Validators.required]],
    });
  }

  get name() {
    return this.form?.get('name')! as FormControl;
  }

  get description() {
    return this.form?.get('description')! as FormControl;
  }

  get price() {
    return this.form?.get('price')! as FormControl;
  }

  get imgUrl() {
    return this.form?.get('imgUrl')! as FormControl;
  }

  ngOnInit(): void {
    if (this.authService.user?.role != 'ADMIN') {
      // this.goToAuth();
    }
  }

  goToAuth() {
    this.router.navigate(['auth']);
  }

  submit() {
    console.log('Submitting');
    this.movieService
      .addMovie()
      .subscribe((data) => console.log('RESPONSE', data));
  }
}
