import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  ngOnInit(): void {}

  get name() {
    return this.form?.get('name')! as FormControl;
  }

  get lastname() {
    return this.form?.get('lastname')! as FormControl;
  }

  get email() {
    return this.form?.get('email')! as FormControl;
  }

  submit() {}
}
