import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { User } from '../interfaces/User';
import { Register } from '../interfaces/Register';
import { Login } from '../interfaces/Login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;

  constructor(private http: HttpService) {}

  login(login: Login) {
    return this.http.post<User>('/auth/login', login);
  }

  register(newUser: Register) {
    return this.http.put<User>('/auth/register', newUser);
  }

  setUser(user: User) {
    this.user = user;
  }
}
