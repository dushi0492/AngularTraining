import {NgModule} from "@angular/core" 
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { BrowserModule } from "@angular/platform-browser";
import { ShoppingModule } from "./shopping/shopping.module";
import { LoginModule } from "./login/login.module";
import { HomeComponent, ListComponent, NotFoundComponent } from "./menulinks.components";
import {RouterModule} from "@angular/router"
import {HttpClientModule} from "@angular/common/http"
import { ProductsComponent } from "./shopping/products.component";

let appRoutes=[
    {path:"",component:HomeComponent},
    {path:"list",component:ListComponent,children:[{path:"",component:ProductsComponent},
    {path:":ctgid",component:ProductsComponent}
    ]},
    {path:"**",component:NotFoundComponent},
]

@NgModule({

    //register Components
    declarations:[AppComponent,HeaderComponent,HomeComponent,ListComponent,NotFoundComponent],
    //specify Module dependencies
    imports:[BrowserModule,LoginModule,ShoppingModule,RouterModule.forRoot(appRoutes),HttpClientModule],
    //startup Component
    bootstrap:[AppComponent]
})

export class AppModule{

    constructor(){
       console.log("I am inside AppModule");
    }

}