import { AuthenticationComponent } from './views/authentication/authentication.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CartComponent } from './views/cart/cart.component';
import { CartWithoutTableComponent } from './views/cart-without-table/cart-without-table.component';

const routes: Routes = [
  {
    path: '',
    component: CartWithoutTableComponent,
  },
  {
    path: 'auth',
    component: AuthenticationComponent,
  },
  {
    path: 'cart',
    component: CartWithoutTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
