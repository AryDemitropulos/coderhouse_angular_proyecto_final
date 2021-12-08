import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

import { HomeComponent } from './views/home/home.component';
import { CartComponent } from './views/cart/cart.component';
import { AuthenticationComponent } from './views/authentication/authentication.component';

import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { InputErrorComponent } from './components/input-error/input-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    MoviesListComponent,
    MovieComponent,
    AuthenticationComponent,
    HomeComponent,
    CartComponent,
    MovieDetailsComponent,
    CartIconComponent,
    InputErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
