import { Component, Output } from "@angular/core";


@Component({
selector:"sign-in",
//SignInHeading is used as string because of []
//[] can be removed  and used like <my-signIn title="{{SignInHeading}}"></my-signIn>  will use varaiable
//[] can be removed  and used like <my-signIn title="SignInHeading"></my-signIn>  will be used as plain string
//(myevent) should be same as name of event emitter obj declared in child 
template:`
Welcome {{username}}
<my-signIn [title]="SignInHeading" (myevent)="handleMyEvent($event)"></my-signIn> 
`
})


export class SignInComponent{
       
    username="Guest";

    SignInHeading="Sign-In"

    handleMyEvent(obj)
    {
      this.username=obj.usr;
    }
}

//below is explination for  output--Data from child to parent
//this is called as even Binding
//where child should emit data and parent will be listening the same
/*
SignIn---Parent
 ==
$event is used in parent to handle the data emitted by child

MySignIN--Child
===
var =instance of eventemitter 
(emit()) will emit data to listners

*/