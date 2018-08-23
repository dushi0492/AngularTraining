import { Injectable } from "@angular/core";
import { Product } from "../../models/products.models";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductService{
  private productsData:Product[]=[];
  restUrl="http://localhost:3000/wsproducts";
  constructor(private httpObj:HttpClient){
// this.productsData=[
// new Product(1,"Bravia",6500,"Sony"),
// new Product(2,"Galaxy",4323,"SamSung Mobile"),
// new Product(3,"Iphone",4323,"Apple Mobile"),
// new Product(4,"Redmi",4323,"MI Mobile"),
// new Product(5,"G6",4323,"LG Mobile"),
// new Product(6,"one Plus 6",4323,"China Mobile"),
// ]
  }

getproducts(){
    return this.httpObj.get<Product[]>(this.restUrl)    
}
}