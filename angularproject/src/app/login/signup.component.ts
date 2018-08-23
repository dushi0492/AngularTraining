import { Component } from "@angular/core";

@Component({
    selector:"sign-up",
    template:`<my-signIn [title]="signup"></my-signIn>` 
})
//SingUp is used as string because of []
export class SignUpComponent{
      signup="Sign Up"
}