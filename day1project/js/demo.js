for (var i=1;i<=5;i++)
{
    console.log("i= " +i);
}
console.log("value of i after for loop " +  i)

for (let j=1;j<=5;j++)
{
    console.log("j=" + j);
}
//console.log("value of j after for loop " +  j)
//AnonymousFuction
let m=function()
{
    return "SG"
}
//console.log(m)
console.log(m());

//Arrow Function
let p = () =>"Blr"
console.log(p());

//Define Arrow Function with arg msg and return Msg
//let f= (msg)=>msg;
let f= msg=>msg;
console.log(f("Hi"));
console.log(f(5+2));
console.log(f(true));

//DoM Manipulation
let change= ()=>{
 //1.Acquire element object
 let d=document.getElementById("header1")
 //2.Get value of reply attribute
 let s=d.getAttribute("reply")
 //manipulate attribute content
 d.innerHTML=s; 
}