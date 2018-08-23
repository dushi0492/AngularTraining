import { Component } from "@angular/core";
import { Category } from "./models/categories.models";
import { CategoryService } from "./shared/services/category.service";


@Component({
    selector:"app-home",
    template:`<h3>Welcome to my Shopping App</h3>`
})
export class HomeComponent{

    constructor() {
           console.log("Inside Home Component");
     }    
}

@Component({
       
       //template:``
        templateUrl:"shoppingList.html"
})
export class ListComponent {
     
     ctgLinks:Category[]=[];

    constructor(private ctgsvc:CategoryService) {
    }
    ngOnInit(){
        this.ctgsvc.getCategories().subscribe(data=>this.ctgLinks=data,err=>console.log("Error"))
    }
} 
@Component({
 template:`<h3>404...Page Not Found !!!</h3> <br>
    <img src="../assets/Not-Found.png"> `
})
export class NotFoundComponent{

    constructor() {
           console.log("Inside Notfound Component");
     }    
} 