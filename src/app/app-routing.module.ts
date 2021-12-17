import { AuthenticationComponent } from './views/authentication/authentication.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CartComponent } from './views/cart/cart.component';
import { CartWithoutTableComponent } from './views/cart-without-table/cart-without-table.component';
import { MovieDetailComponent } from './views/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'auth',
    component: AuthenticationComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'movie/:id',
    component: MovieDetailComponent,
  },
  { path: 'movie', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', component: AuthenticationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
