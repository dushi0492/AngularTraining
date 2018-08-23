import { TestBed } from "../../node_modules/@angular/core/testing";
import { SignUpComponent } from "./login/signup.component";
import { MySignInComponent } from "./shared/mysignin.component";
import { ReactiveFormsModule } from "../../node_modules/@angular/forms";

describe("SignUp Test Demo",()=>{

beforeEach(()=>{
    TestBed.configureTestingModule({
    declarations:[SignUpComponent,MySignInComponent],
    imports:[ReactiveFormsModule]

})})
it("Verify instance os sign up component",()=>{

 let f=TestBed.createComponent(SignUpComponent);
 expect(f).toBeDefined()
})

it("Should verify datamember",()=>{
     let f=TestBed.createComponent(SignUpComponent);
     let obj=f.componentInstance
     expect(obj.signup).toEqual("Sign Up")
    })

});