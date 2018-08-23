import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule)



console.log("I am in main File");


/*
//Type Annotation
let n:number;
n=10 ;
console.log(10);

//Type Inference
let x=30;*/

