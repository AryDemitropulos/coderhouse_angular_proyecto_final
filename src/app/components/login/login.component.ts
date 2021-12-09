import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  hidePassword: boolean = true;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  get user() {
    return this.form?.get('user')! as FormControl;
  }

  get password() {
    return this.form?.get('password')! as FormControl;
  }

  submit() {
    const user = this.form.value.user;
    const password = this.form.value.password;

    if (this.form.valid) {
      console.log('Entro');
      this.form.reset();
    }
  }
}
