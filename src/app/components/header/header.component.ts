import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  show: boolean;
  constructor(private router: Router, private service: CartService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.show = event.url != '/auth' && event.url != '/';
        if (!this.show) {
          service.cleanCart();
        }
      }
    });
  }

  goToHome() {
    this.router.navigate(['home']);
  }
  ngOnInit(): void {}
}
