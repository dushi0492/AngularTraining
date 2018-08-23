import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products.models';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styles: []
})
export class ManageComponent implements OnInit {

  mgproducts:Product[]=[];
  mydate=new Date();
  queryString="";
  constructor(private ps:ProductService) { }

  ngOnInit() {
    //this.mgproducts=this.ps.getproducts();
    
    this.ps.getproducts().subscribe(
    data=>{this.mgproducts=data},
    err=>{console.log("Error",err)}
    );

  }

}
