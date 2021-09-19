import { Component, OnInit } from '@angular/core';
import { CartModel } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartData: CartModel;
  cartTotal: number;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    // whenever the header component gets loaded 
    // whenever cart data changes we 
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
    this.cartService.cartData$.subscribe(data => this.cartData = data);
  }

}
