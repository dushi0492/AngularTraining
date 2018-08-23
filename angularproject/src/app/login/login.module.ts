import { NgModule } from "@angular/core";
import {RouterModule} from "@angular/router";
import { SignInComponent } from "./signin.component";
import { SignUpComponent } from "./signup.component";
import { SharedModule } from "../shared/shared.module";

let childRoutes=[
    {path:"signin",component:SignInComponent},
    {path:"signup",component:SignUpComponent}    
]
//Using for child route as its child for App route module 
//For child provides additional functionalities
//we can use App Routes
@NgModule({
    declarations:[SignInComponent,SignUpComponent],
    imports:[RouterModule.forChild(childRoutes),SharedModule]

})
export class LoginModule{

   constructor() {
    console.log("I am inside Login Module");   
    }
}