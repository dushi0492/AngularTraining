import { Injectable } from "@angular/core";
import { CartItem } from "../../models/cartitem.model";


@Injectable()
export class CartItemService{
private cartData:CartItem[]=[];
getCartItem()
{
    return this.cartData;
}
addcartItem(newitem:CartItem)
{
    console.log(newitem);
    this.cartData.push(newitem);
}
removeCart(idx:number)
{
    this.cartData.splice(idx,1);
}

}