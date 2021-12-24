import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  show: boolean;
  subscription: Subscription;
  constructor(private router: Router, private service: CartService) {}

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.show = event.url != '/auth' && event.url != '/';
        if (!this.show) {
          this.service.cleanCart();
        }
      }
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  goToHome() {
    this.router.navigate(['home']);
  }
}
