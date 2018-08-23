import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cartitem.model';
import { CartItemService } from '../shared/services/cart.service';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styles: []
})
export class CartitemsComponent implements OnInit {

  cartItems:CartItem[]=[];
  constructor(private cs:CartItemService) {  }

  ngOnInit() {
    this.cartItems=this.cs.getCartItem()
  }
  delete(idx:number)
  {
    this.cs.removeCart(idx);
    this.cartItems=this.cs.getCartItem()
  }
  totalAmount()
  {
    let tot=0;
    for(let item of this.cartItems)
    {
     tot+=(item.price*item.qty);
    }
    return tot;
  }

}
