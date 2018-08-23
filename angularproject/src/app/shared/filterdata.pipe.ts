import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../models/products.models";


@Pipe({name:"filterdata"})
export class  FilterPipe implements PipeTransform {
    transform(input: any[],searchvar:string,column:string) {
      
        if(searchvar==undefined ||column== undefined){
            return input    
        }
        else if(searchvar!="")
        {
            return input.filter(e=>e[column].indexOf(searchvar)>-1)
        }
        return input     
  }

}