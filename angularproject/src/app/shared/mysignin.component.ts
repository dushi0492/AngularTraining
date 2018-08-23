import { Component, Input,EventEmitter, Output, OnInit, OnChanges, OnDestroy } from "@angular/core";
import{FormGroup,FormControl, Validators, MinLengthValidator} from "@angular/forms"
//getelementbyid can be replace by reference varaibles in Angular
//refrence varaible are identified/declared using '#'
//every Dom element can have any identifier in angular using # similar to id 
@Component({
    selector:"my-signIn",
    templateUrl:"mysignin.component.html"
      
})
//@Input() decorator is used to make varaible as iput of parent i.e,Sign in and Sign up
//@Output() decorator is used to make event varaible exposed as output to parent i.e,Sign in and Sign u
//OnInit,OnChanges,OnDestroy,constructor are life cycle vents which are called life cycle hooks
export class MySignInComponent implements OnInit,OnChanges,OnDestroy
{    
    @Input()
    title:string;
    @Output()
    myevent=new EventEmitter ();
    // handleButtonClick(usr,pwd):void{       
    //     console.log("User Name:",usr,"Password :",pwd)
    //     this.myevent.emit({usr,pwd});
    // }
    handleButtonClick():void{

    }
    constructor(){
        console.log("Inside MySignInComponent Constructor",this.title);
    }
    ngOnInit() {
       
        this.myform=new FormGroup({
            mname:new FormControl("",Validators.required),
            mpwd:new FormControl("",[Validators.required,Validators.minLength(3)])
        });
       console.log("Inside MySignInComponent ngOnInit",this.title);
    }
    ngOnChanges(){
        console.log("Inside MySignInComponent ngOnChanges",this.title);
    }
    ngOnDestroy() {
        console.log("Inside MySignInComponent ngOnDestroy");
    }
    myform:FormGroup;
}