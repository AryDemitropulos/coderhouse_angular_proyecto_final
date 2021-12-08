import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { AuthenticationComponent } from './views/authentication/authentication.component';
import { HomeComponent } from './views/home/home.component';
import { CartComponent } from './views/cart/cart.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginComponent, SignUpComponent, MoviesListComponent, MovieComponent, AuthenticationComponent, HomeComponent, CartComponent, MovieDetailsComponent, CartIconComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
