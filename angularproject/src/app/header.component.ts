import { Component } from "@angular/core";

@Component({
    selector:"app-header",
    templateUrl:"./header.component.html"
})

export class HeaderComponent{
   
    appTitle:string;
    userName="Guest";
    constructor() {
        this.appTitle="My Shopping App"
        console.log("Inside Header Component");
     }
     showUserName():string {
        return this.userName;
     }
} 