import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products.models';
import { ProductService } from '../shared/services/product.service';
import { CartItemService } from '../shared/services/cart.service';
import { CartItem } from '../models/cartitem.model';
import { ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
  
  products:Product[]=[];  
  constructor(private ps:ProductService,private cs:CartItemService,private ar:ActivatedRoute) { }
  
  ngOnInit() {

    // this.ps.getproducts().subscribe(
    //   data=>{this.products=data},
    //   err=>{console.log("Error",err)}
    //   );

    this.ar.params.subscribe(
     params=>{
      let paramid=params.ctgid;
      this.ps.getproducts().subscribe(data=>{
         if(paramid==undefined)
         {
              this.products=data           
         }   
         else
         {
           this.products=data.filter(e=>e.ctgid==paramid)
         }})});

  }
  addToCart(selectedProd:Product)
  {
   console.log("Buttonclick")
   let newitem=new CartItem(selectedProd.id,selectedProd.name,selectedProd.price,1); 
   this.cs.addcartItem(newitem);
  }

}
