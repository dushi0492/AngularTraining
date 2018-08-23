import { Component } from "@angular/core";

@Component({
   //specify TagName for component
selector:"app-root",
   //provide display output for component
 template:`<app-header> </app-header>
           <router-outlet> </router-outlet>`
})

export class AppComponent{
constructor() {
    console.log("I am inside AppComponent")
}
}